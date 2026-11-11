import { InvalidInboundDataError } from "./errors.ts";
import { isObject, nonEmptyString, parseJson } from "./json.ts";
import { Credentials, type InvocationAppLinkContext } from "./types.ts";

const HEADER_NAME = "x-client-context";

/**
 * Parses the context of an invocation from Salesforce from the
 * `x-client-context` header of an inbound request.
 *
 * The SDK trusts the header, because AppLink's Service Mesh authenticates
 * requests before they reach the app.
 *
 * @example
 * ```ts
 * const context = parseInvocationContext((name) => req.get(name));
 * ```
 *
 * @param getHeader Returns the value of the inbound request's header with the
 *   given name, or `undefined` or `null` if the request doesn't have it. The SDK
 *   always passes header names in lower case, so for Node.js and Fastify
 *   requests, `(name) => req.headers[name]` works too.
 * @returns The context of the invocation.
 * @throws {InvalidInboundDataError} If the header is missing or malformed.
 * @see https://devcenter.heroku.com/articles/invoking-heroku-applink-apps
 */
export function parseInvocationContext(
  getHeader: (name: string) => string | readonly string[] | null | undefined,
): InvocationAppLinkContext {
  const value: unknown = getHeader(HEADER_NAME);
  if (Array.isArray(value)) {
    throw new InvalidInboundDataError(
      `The request has more than one ${HEADER_NAME} header.`,
    );
  }
  if (typeof value !== "string" || value === "") {
    throw new InvalidInboundDataError(`The ${HEADER_NAME} header is missing.`);
  }

  let decoded: string;
  try {
    decoded = atob(value);
  } catch {
    throw new InvalidInboundDataError(
      `The ${HEADER_NAME} header is not valid base64.`,
    );
  }

  const json = parseJson(Buffer.from(decoded, "latin1"));
  if (!isObject(json)) {
    throw new InvalidInboundDataError(
      `The ${HEADER_NAME} header doesn't contain a UTF-8 JSON object.`,
    );
  }
  if (json["version"] !== "1.0") {
    throw new InvalidInboundDataError(
      `The ${HEADER_NAME} header doesn't have the supported version 1.0.`,
    );
  }

  const userContext = json["userContext"];
  if (!isObject(userContext)) {
    throw invalidField("userContext");
  }

  const accessToken = json["accessToken"] ?? undefined;
  if (accessToken !== undefined && !nonEmptyString(accessToken)) {
    throw invalidField("accessToken");
  }
  const namespace = json["namespace"] ?? undefined;
  if (namespace !== undefined && typeof namespace !== "string") {
    throw invalidField("namespace");
  }

  return Object.freeze({
    requestId: requiredString(json, "requestId"),
    ...(namespace ? { namespace } : {}),
    org: Object.freeze({
      id: requiredString(json, "orgId"),
      domainUrl: requiredString(json, "orgDomainUrl"),
      apiVersion: requiredString(json, "apiVersion"),
    }),
    user: Object.freeze({
      id: requiredString(userContext, "userId", "userContext."),
      username: requiredString(userContext, "username", "userContext."),
    }),
    ...(accessToken === undefined
      ? {}
      : { credentials: new Credentials(accessToken) }),
  });
}

function requiredString(
  object: Readonly<Record<string, unknown>>,
  field: string,
  prefix = "",
): string {
  const value = object[field];
  if (!nonEmptyString(value)) {
    throw invalidField(prefix + field);
  }
  return value;
}

function invalidField(field: string): InvalidInboundDataError {
  return new InvalidInboundDataError(
    `The ${HEADER_NAME} header has no valid "${field}" field.`,
  );
}
