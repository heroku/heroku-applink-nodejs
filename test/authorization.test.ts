import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { inspect } from "node:util";
import {
  authorizationPath,
  parseAuthorizationResponse,
  resolveAttachment,
} from "../src/authorization.ts";
import {
  ConfigurationError,
  UnexpectedResponseError,
  UnusableAuthorizationError,
} from "../src/index.ts";
import { loadVectors } from "./vectors.ts";

interface ResponseVector {
  name: string;
  body: string;
  expected?: {
    authorizationMetadata: Record<string, string | null>;
    org: Record<string, string>;
    user: Record<string, string>;
    credentials: { accessToken: string; expiration: string | null };
  };
  error?: string;
  status?: string;
}

function millis(value: string | null | undefined): number | undefined {
  return value == null ? undefined : Date.parse(value);
}

describe("parseAuthorizationResponse", () => {
  for (const vector of loadVectors<ResponseVector>(
    "authorization-response.json",
  )) {
    it(vector.name, () => {
      const body = Buffer.from(vector.body, "utf8");
      const { expected } = vector;
      if (vector.error === "unusable_authorization" && expected === undefined) {
        assert.throws(
          () => parseAuthorizationResponse(body),
          (error: unknown) =>
            error instanceof UnusableAuthorizationError &&
            error.status === vector.status,
        );
        return;
      }
      if (expected === undefined) {
        assert.throws(
          () => parseAuthorizationResponse(body),
          UnexpectedResponseError,
        );
        return;
      }
      let context;
      try {
        context = parseAuthorizationResponse(body);
      } catch (error) {
        if (vector.error === "unusable_authorization") {
          assert.ok(
            error instanceof UnusableAuthorizationError &&
              error.status === vector.status,
          );
          return;
        }
        if (vector.error !== undefined) {
          assert.ok(error instanceof UnexpectedResponseError);
          return;
        }
        throw error;
      }
      const metadata = context.authorizationMetadata;
      const expectedMetadata = expected.authorizationMetadata;
      assert.equal(metadata.id, expectedMetadata["id"]);
      assert.equal(metadata.developerName, expectedMetadata["developerName"]);
      assert.equal(
        metadata.createdAt.getTime(),
        millis(expectedMetadata["createdAt"]),
      );
      assert.equal(metadata.createdBy, expectedMetadata["createdBy"]);
      assert.equal(
        metadata.createdViaApp,
        expectedMetadata["createdViaApp"] ?? undefined,
      );
      assert.equal(
        metadata.lastModifiedAt.getTime(),
        millis(expectedMetadata["lastModifiedAt"]),
      );
      assert.equal(
        metadata.lastModifiedBy,
        expectedMetadata["lastModifiedBy"] ?? undefined,
      );
      assert.equal(
        metadata.redirectUri,
        expectedMetadata["redirectUri"] ?? undefined,
      );
      assert.deepEqual({ ...context.org }, expected.org);
      assert.deepEqual({ ...context.user }, expected.user);
      assert.equal(
        context.credentials.accessToken,
        expected.credentials.accessToken,
      );
      assert.equal(
        context.credentials.expiration?.getTime(),
        millis(expected.credentials.expiration),
      );
    });
  }

  it("doesn't leak the body in error messages", () => {
    const body = Buffer.from(
      '{"status":"authorized","org":{"user_auth":{"access_token":"secret-token"}}}',
    );
    assert.throws(
      () => parseAuthorizationResponse(body),
      (error: Error) =>
        !inspect(error).includes("secret-token") && error.cause === undefined,
    );
  });
});

interface AttachmentVector {
  name: string;
  env: Record<string, string>;
  attachment: string | null;
  expected?: { apiUrl: string; token: string; appId: string };
  error?: string;
}

describe("resolveAttachment", () => {
  for (const vector of loadVectors<AttachmentVector>(
    "attachment-resolution.json",
  )) {
    it(vector.name, () => {
      const attachment = vector.attachment ?? undefined;
      if (vector.expected === undefined) {
        assert.throws(
          () => resolveAttachment(vector.env, attachment),
          ConfigurationError,
        );
      } else {
        assert.deepEqual(
          resolveAttachment(vector.env, attachment),
          vector.expected,
        );
      }
    });
  }
});

describe("authorizationPath", () => {
  for (const vector of loadVectors<{ developerName: string; path: string }>(
    "request-path.json",
  )) {
    it(vector.developerName, () => {
      assert.equal(authorizationPath(vector.developerName), vector.path);
    });
  }
});
