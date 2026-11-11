import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { inspect } from "node:util";
import { getAuthorizationWith } from "../src/getAuthorization.ts";
import type { HttpSettings } from "../src/http.ts";
import {
  ConfigurationError,
  HttpError,
  TransportError,
  UnexpectedResponseError,
  UnusableAuthorizationError,
} from "../src/index.ts";
import { USER_AGENT } from "../src/version.ts";
import { loadVectors } from "./vectors.ts";
import { type Handler, startTlsServer, type TlsServer } from "./tlsServer.ts";

const MIB = 1024 * 1024;
const VALID_BODY =
  loadVectors<{ body: string }>("authorization-response.json")[0]?.body ?? "";

function json(status: number, body: string): Handler {
  return (_req, res) =>
    res.writeHead(status, { "Content-Type": "application/json" }).end(body);
}

describe("getAuthorization", () => {
  let server: TlsServer;
  let settings: HttpSettings;
  let env: Record<string, string>;

  before(async () => {
    server = await startTlsServer();
    settings = { timeoutMs: 500, retryDelaysMs: [1, 2, 3], ca: server.ca };
    env = {
      HEROKU_APPLINK_API_URL: `${server.url}/addons/abc/`,
      HEROKU_APPLINK_TOKEN: "addon-token",
      HEROKU_APP_ID: "app-uuid",
    };
  });

  after(() => server.close());

  it("sends the documented request", async () => {
    server.respond(json(200, VALID_BODY));
    const context = await getAuthorizationWith(env, settings, "my org/x");
    assert.equal(
      context.credentials.accessToken,
      "00DJS0000000123!AQ0AQ.token",
    );
    const [req] = server.requests;
    assert.equal(req?.method, "GET");
    assert.equal(req.url, "/addons/abc/authorizations/my%20org%2Fx");
    assert.equal(req.headers.authorization, "Bearer addon-token");
    assert.equal(req.headers["x-app-uuid"], "app-uuid");
    assert.equal(req.headers.accept, "application/json");
    assert.equal(req.headers["user-agent"], USER_AGENT);
  });

  it("fails with a configuration error before sending a request", async () => {
    server.respond(json(200, VALID_BODY));
    await assert.rejects(
      getAuthorizationWith(env, settings, ""),
      ConfigurationError,
    );
    await assert.rejects(
      getAuthorizationWith(env, settings, "x", ""),
      ConfigurationError,
    );
    await assert.rejects(
      getAuthorizationWith({ ...env, HEROKU_APP_ID: "" }, settings, "x"),
      ConfigurationError,
    );
    assert.equal(server.requests.length, 0);
  });

  it("fails with a configuration error for config vars the request can't be built from", async () => {
    server.respond(json(200, VALID_BODY));
    for (const [name, value] of [
      ["HEROKU_APPLINK_TOKEN", "secret\ntoken"],
      ["HEROKU_APPLINK_TOKEN", "secret-tok€n"],
      ["HEROKU_APP_ID", "app-uuid\r\nX-Injected: secret"],
    ] as const) {
      await assert.rejects(
        getAuthorizationWith({ ...env, [name]: value }, settings, "x"),
        (error: unknown) =>
          error instanceof ConfigurationError &&
          !inspect(error).includes("secret"),
      );
    }
    assert.equal(server.requests.length, 0);
  });

  it("rejects arguments of the wrong type from JavaScript callers", async () => {
    server.respond(json(200, VALID_BODY));
    const untyped = getAuthorizationWith as (
      ...args: unknown[]
    ) => Promise<unknown>;
    await assert.rejects(untyped(env, settings), ConfigurationError);
    await assert.rejects(untyped(env, settings, 42), ConfigurationError);
    await assert.rejects(untyped(env, settings, "x", 42), ConfigurationError);
    assert.equal(server.requests.length, 0);
  });

  it("uses the default attachment for a null attachment", async () => {
    server.respond(json(200, VALID_BODY));
    await getAuthorizationWith(env, settings, "x", null);
    assert.equal(server.requests.length, 1);
  });

  it("reports non-2xx responses with status and body", async () => {
    server.respond(json(404, '{"message":"not found \xff"}'));
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) => {
        assert.ok(error instanceof HttpError);
        assert.equal(error.status, 404);
        assert.equal(error.body, '{"message":"not found \xff"}');
        return true;
      },
    );
    assert.equal(server.requests.length, 1);
  });

  it("replaces invalid UTF-8 in error bodies", async () => {
    server.respond((_req, res) =>
      res.writeHead(400).end(Buffer.from([0x61, 0xff, 0x62])),
    );
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) => error instanceof HttpError && error.body === "a�b",
    );
  });

  it("doesn't follow redirects", async () => {
    server.respond((_req, res) =>
      res.writeHead(302, { Location: "/elsewhere" }).end(),
    );
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) => error instanceof HttpError && error.status === 302,
    );
    assert.equal(server.requests.length, 1);
  });

  for (const status of [429, 500, 503]) {
    it(`retries after ${String(status)}`, async () => {
      server.respond(json(status, "busy"), json(200, VALID_BODY));
      await getAuthorizationWith(env, settings, "x");
      assert.equal(server.requests.length, 2);
    });
  }

  it("gives up after three retries and reports the last error", async () => {
    server.respond(
      json(500, "first"),
      json(500, "second"),
      json(500, "third"),
      json(503, "last"),
    );
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) =>
        error instanceof HttpError &&
        error.status === 503 &&
        error.body === "last",
    );
    assert.equal(server.requests.length, 4);
  });

  it("doesn't retry other responses", async () => {
    server.respond(json(400, "bad"), json(200, VALID_BODY));
    await assert.rejects(getAuthorizationWith(env, settings, "x"), HttpError);
    assert.equal(server.requests.length, 1);
  });

  it("doesn't retry an unusable authorization", async () => {
    server.respond(json(200, '{"status":"failed"}'), json(200, VALID_BODY));
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      UnusableAuthorizationError,
    );
    assert.equal(server.requests.length, 1);
  });

  it("retries after a timeout and reports a transport error", async () => {
    server.respond(() => undefined);
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      TransportError,
    );
    assert.equal(server.requests.length, 4);
  });

  it("times out while reading a slow body", async () => {
    server.respond((_req, res) => {
      res.writeHead(200);
      res.write("{");
    });
    await assert.rejects(
      getAuthorizationWith(env, { ...settings, retryDelaysMs: [] }, "x"),
      TransportError,
    );
  });

  it("reports a transport error when the connection fails", async () => {
    const unreachable = {
      ...env,
      HEROKU_APPLINK_API_URL: "https://127.0.0.1:1",
    };
    await assert.rejects(
      getAuthorizationWith(unreachable, settings, "x"),
      TransportError,
    );
  });

  it("reports a transport error for an untrusted certificate", async () => {
    server.respond(json(200, VALID_BODY));
    const untrusted = { timeoutMs: settings.timeoutMs, retryDelaysMs: [] };
    await assert.rejects(
      getAuthorizationWith(env, untrusted, "x"),
      TransportError,
    );
  });

  it("rejects 2xx bodies larger than 1 MiB", async () => {
    server.respond(json(200, VALID_BODY + " ".repeat(MIB)));
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      UnexpectedResponseError,
    );
  });

  it("accepts 2xx bodies of exactly 1 MiB", async () => {
    server.respond(
      json(200, VALID_BODY + " ".repeat(MIB - Buffer.byteLength(VALID_BODY))),
    );
    await getAuthorizationWith(env, settings, "x");
  });

  it("truncates error bodies to 1 MiB", async () => {
    server.respond(json(400, "x".repeat(2 * MIB)));
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) =>
        error instanceof HttpError && error.body.length === MIB,
    );
  });

  it("doesn't leak the response body of an unexpected response", async () => {
    server.respond(
      json(
        200,
        '{"status":"authorized","org":{"user_auth":{"access_token":"secret-token"}}}',
      ),
    );
    await assert.rejects(
      getAuthorizationWith(env, settings, "x"),
      (error: unknown) =>
        error instanceof UnexpectedResponseError &&
        !inspect(error).includes("secret-token"),
    );
  });
});
