import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { inspect } from "node:util";
import { Credentials } from "../src/index.ts";
import { USER_AGENT } from "../src/version.ts";

describe("Credentials", () => {
  const credentials = new Credentials(
    "secret-token",
    new Date("2026-10-13T09:15:42Z"),
  );

  it("redacts the access token in toString", () => {
    assert.equal(
      String(credentials),
      "Credentials(accessToken=[REDACTED], expiration=2026-10-13T09:15:42.000Z)",
    );
  });

  it("redacts the access token in inspect, also when nested", () => {
    const output = inspect({ context: { credentials } }, { depth: 5 });
    assert.ok(output.includes("[REDACTED]"));
    assert.ok(!output.includes("secret-token"));
  });

  it("includes the access token in JSON", () => {
    assert.equal(
      JSON.stringify(credentials),
      '{"accessToken":"secret-token","expiration":"2026-10-13T09:15:42.000Z"}',
    );
  });

  it("includes the access token when copying properties", () => {
    assert.deepEqual(Object.assign({}, credentials), {
      accessToken: "secret-token",
      expiration: new Date("2026-10-13T09:15:42Z"),
    });
  });
});

describe("USER_AGENT", () => {
  it("matches the package version", () => {
    const pkg = JSON.parse(
      readFileSync(join(import.meta.dirname, "..", "package.json"), "utf8"),
    ) as {
      version: string;
    };
    assert.equal(USER_AGENT, `heroku-applink-nodejs/${pkg.version}`);
  });
});
