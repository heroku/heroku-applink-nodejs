import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { IncomingHttpHeaders } from "node:http";
import { inspect } from "node:util";
import {
  InvalidInboundDataError,
  parseInvocationContext,
} from "../src/index.ts";
import { loadVectors } from "./vectors.ts";

interface Vector {
  name: string;
  header: string | null;
  expected?: {
    requestId: string;
    namespace: string | null;
    org: { id: string; domainUrl: string; apiVersion: string; type: null };
    user: { id: string; username: string };
    credentials: { accessToken: string; expiration: null } | null;
  };
  error?: string;
}

describe("parseInvocationContext", () => {
  for (const vector of loadVectors<Vector>("invocation-context.json")) {
    it(vector.name, () => {
      const getHeader = (name: string) =>
        name === "x-client-context" ? vector.header : undefined;
      const { expected } = vector;
      if (expected === undefined) {
        assert.throws(
          () => parseInvocationContext(getHeader),
          InvalidInboundDataError,
        );
        return;
      }
      let context;
      try {
        context = parseInvocationContext(getHeader);
      } catch (error) {
        if (vector.error !== undefined) {
          assert.ok(error instanceof InvalidInboundDataError);
          return;
        }
        throw error;
      }
      assert.equal(context.requestId, expected.requestId);
      assert.equal(context.namespace, expected.namespace ?? undefined);
      assert.deepEqual(
        { ...context.org },
        {
          id: expected.org.id,
          domainUrl: expected.org.domainUrl,
          apiVersion: expected.org.apiVersion,
        },
      );
      assert.deepEqual({ ...context.user }, expected.user);
      assert.equal(
        context.credentials?.accessToken,
        expected.credentials?.accessToken,
      );
      assert.equal(context.credentials?.expiration, undefined);
    });
  }

  it("accepts Node.js request headers", () => {
    const vector = loadVectors<Vector>("invocation-context.json")[0];
    const headers: IncomingHttpHeaders = {
      "x-client-context": vector?.header ?? undefined,
    };
    const context = parseInvocationContext((name) => headers[name]);
    assert.equal(context.requestId, vector?.expected?.requestId);
  });

  it("rejects repeated headers", () => {
    const vector = loadVectors<Vector>("invocation-context.json")[0];
    const header = vector?.header ?? "";
    assert.throws(
      () => parseInvocationContext(() => [header, header]),
      InvalidInboundDataError,
    );
  });

  it("asks for the header in lower case", () => {
    const names: string[] = [];
    assert.throws(() =>
      parseInvocationContext((name) => {
        names.push(name);
        return undefined;
      }),
    );
    assert.deepEqual(names, ["x-client-context"]);
  });

  it("doesn't leak the header in error messages", () => {
    const header = Buffer.from(
      '{"accessToken":"secret-token","version":"1.0"',
    ).toString("base64");
    assert.throws(
      () => parseInvocationContext(() => header),
      (error: Error) =>
        !inspect(error).includes("secret-token") && error.cause === undefined,
    );
  });

  it("returns immutable data", () => {
    const vector = loadVectors<Vector>("invocation-context.json")[0];
    const context = parseInvocationContext(() => vector?.header);
    assert.ok(
      Object.isFrozen(context) &&
        Object.isFrozen(context.org) &&
        Object.isFrozen(context.credentials),
    );
  });
});
