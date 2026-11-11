import {
  ConfigurationError,
  UnexpectedResponseError,
  UnusableAuthorizationError,
} from "./errors.ts";
import {
  type JsonObject,
  isObject,
  nonEmptyString,
  parseJson,
} from "./json.ts";
import {
  type AuthorizationAppLinkContext,
  type AuthorizationStatus,
  Credentials,
  type OrgType,
} from "./types.ts";

export type Env = Readonly<Record<string, string | undefined>>;

export interface ResolvedAttachment {
  readonly apiUrl: string;
  readonly token: string;
  readonly appId: string;
}

const ABSOLUTE_URL = /^[A-Za-z][A-Za-z0-9+.-]*:\/\//;
const HTTPS_URL = /^https:\/\//i;

export function resolveAttachment(
  env: Env,
  attachment?: string | null,
): ResolvedAttachment {
  let apiUrlVar: string;
  let tokenVar: string;

  if (attachment === undefined || attachment === null) {
    apiUrlVar = "HEROKU_APPLINK_API_URL";
    tokenVar = "HEROKU_APPLINK_TOKEN";
  } else if (typeof attachment !== "string") {
    throw new ConfigurationError("The attachment must be a string.");
  } else if (attachment === "") {
    throw new ConfigurationError("The attachment must not be empty.");
  } else if (ABSOLUTE_URL.test(attachment)) {
    const wanted = normalizeUrl(attachment);
    const matches = Object.keys(env).filter(
      (name) =>
        name.endsWith("_API_URL") && normalizeUrl(env[name] ?? "") === wanted,
    );
    const [match, ...others] = matches;
    if (match === undefined) {
      throw new ConfigurationError(
        `No config var ending in _API_URL matches the attachment URL ${attachment}.`,
      );
    }
    if (others.length > 0) {
      throw new ConfigurationError(
        `Several config vars match the attachment URL ${attachment}: ${matches.sort().join(", ")}.`,
      );
    }
    apiUrlVar = match;
    tokenVar = match.slice(0, -"API_URL".length) + "TOKEN";
  } else {
    const name = asciiUpperCase(attachment);
    if (env[`${name}_API_URL`] && env[`${name}_TOKEN`]) {
      apiUrlVar = `${name}_API_URL`;
      tokenVar = `${name}_TOKEN`;
    } else {
      apiUrlVar = `HEROKU_APPLINK_${name}_API_URL`;
      tokenVar = `HEROKU_APPLINK_${name}_TOKEN`;
    }
  }

  const apiUrl = requiredConfigVar(env, apiUrlVar);
  const token = requiredConfigVar(env, tokenVar);
  const appId = requiredConfigVar(env, "HEROKU_APP_ID");
  if (!HTTPS_URL.test(apiUrl)) {
    throw new ConfigurationError(
      `The config var ${apiUrlVar} must contain an https URL.`,
    );
  }
  return {
    apiUrl: apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl,
    token,
    appId,
  };
}

function requiredConfigVar(env: Env, name: string): string {
  const value = env[name];
  if (!value) {
    throw new ConfigurationError(`The config var ${name} is missing or empty.`);
  }
  return value;
}

function normalizeUrl(url: string): string {
  const lower = asciiLowerCase(url);
  return lower.endsWith("/") ? lower.slice(0, -1) : lower;
}

function asciiLowerCase(value: string): string {
  return value.replace(/[A-Z]+/g, (letters) => letters.toLowerCase());
}

function asciiUpperCase(value: string): string {
  return value.replace(/[a-z]+/g, (letters) => letters.toUpperCase());
}

const UNRESERVED = /[A-Za-z0-9\-._~]/;

export function authorizationPath(developerName: string): string {
  let encoded = "";
  for (const byte of new TextEncoder().encode(developerName)) {
    const char = String.fromCharCode(byte);
    encoded += UNRESERVED.test(char)
      ? char
      : "%" + byte.toString(16).toUpperCase().padStart(2, "0");
  }
  return `/authorizations/${encoded}`;
}

const AUTHORIZATION_STATUSES: readonly string[] = [
  "authorizing",
  "authorized",
  "disconnecting",
  "disconnected",
  "failed",
] satisfies AuthorizationStatus[];

const ORG_TYPES: readonly string[] = [
  "SalesforceOrg",
  "DataCloudOrg",
] satisfies OrgType[];

const MAX_EXPIRATION = 253402300799999;
const OFFSET = /(?:Z|[+-]\d{2}:\d{2})$/i;

export function parseAuthorizationResponse(
  body: Uint8Array,
): AuthorizationAppLinkContext {
  const json = parseJson(body);
  if (!isObject(json)) {
    throw new UnexpectedResponseError(
      "The AppLink API response is not a JSON object.",
    );
  }
  const status = json["status"];
  if (typeof status !== "string" || !AUTHORIZATION_STATUSES.includes(status)) {
    throw invalidField("status");
  }
  if (status !== "authorized") {
    throw new UnusableAuthorizationError(
      `The authorization has the status ${status} instead of authorized.`,
      status as AuthorizationStatus,
    );
  }

  const org = requiredObject(json, "org");
  const userAuth = requiredObject(org, "user_auth", "org.");
  const type = org["type"];
  if (typeof type !== "string" || !ORG_TYPES.includes(type)) {
    throw invalidField("org.type");
  }
  const createdViaApp = optionalString(json, "created_via_app");
  const lastModifiedBy = optionalString(json, "last_modified_by");
  const redirectUri = optionalString(json, "redirect_uri");
  const expiration = optionalExpiration(userAuth);

  return Object.freeze({
    authorizationMetadata: Object.freeze({
      id: requiredString(json, "id"),
      developerName: requiredString(org, "developer_name", "org."),
      createdAt: requiredTimestamp(json, "created_at"),
      createdBy: requiredString(json, "created_by"),
      ...(createdViaApp === undefined ? {} : { createdViaApp }),
      lastModifiedAt: requiredTimestamp(json, "last_modified_at"),
      ...(lastModifiedBy === undefined ? {} : { lastModifiedBy }),
      ...(redirectUri === undefined ? {} : { redirectUri }),
    }),
    org: Object.freeze({
      id: requiredString(org, "id", "org."),
      domainUrl: requiredString(org, "instance_url", "org."),
      apiVersion: requiredString(org, "api_version", "org."),
      type: type as OrgType,
    }),
    user: Object.freeze({
      id: requiredString(userAuth, "user_id", "org.user_auth."),
      username: requiredString(userAuth, "username", "org.user_auth."),
    }),
    credentials: new Credentials(
      requiredString(userAuth, "access_token", "org.user_auth."),
      expiration,
    ),
  });
}

function requiredObject(
  object: JsonObject,
  field: string,
  prefix = "",
): JsonObject {
  const value = object[field];
  if (!isObject(value)) {
    throw invalidField(prefix + field);
  }
  return value;
}

function requiredString(
  object: JsonObject,
  field: string,
  prefix = "",
): string {
  const value = object[field];
  if (!nonEmptyString(value)) {
    throw invalidField(prefix + field);
  }
  return value;
}

function optionalString(object: JsonObject, field: string): string | undefined {
  const value = object[field] ?? undefined;
  if (value !== undefined && typeof value !== "string") {
    throw invalidField(field);
  }
  return value || undefined;
}

function requiredTimestamp(object: JsonObject, field: string): Date {
  const value = requiredString(object, field);
  const millis = OFFSET.test(value) ? Date.parse(value) : NaN;
  if (Number.isNaN(millis)) {
    throw invalidField(field);
  }
  return new Date(millis);
}

function optionalExpiration(userAuth: JsonObject): Date | undefined {
  const value = userAuth["expiration"] ?? undefined;
  if (value === undefined) {
    return undefined;
  }
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < 0 ||
    value > MAX_EXPIRATION
  ) {
    throw invalidField("org.user_auth.expiration");
  }
  return value === 0 ? undefined : new Date(value);
}

function invalidField(field: string): UnexpectedResponseError {
  return new UnexpectedResponseError(
    `The AppLink API response has no valid "${field}" field.`,
  );
}
