import type { AuthorizationStatus } from "./types.ts";

/**
 * The common base class of all errors the SDK throws.
 */
export class AppLinkError extends Error {
  override name = "AppLinkError";
}

/**
 * Data sent to the app is missing or can't be parsed, such as a missing or
 * malformed `x-client-context` header.
 */
export class InvalidInboundDataError extends AppLinkError {
  override name = "InvalidInboundDataError";
}

/**
 * An authorization lookup can't start because its input or the app's config
 * vars are missing or invalid. Thrown before any request is sent.
 */
export class ConfigurationError extends AppLinkError {
  override name = "ConfigurationError";
}

/**
 * A request to the AppLink API didn't complete, for example because the
 * connection failed or timed out.
 */
export class TransportError extends AppLinkError {
  override name = "TransportError";
}

/**
 * The AppLink API responded with a status other than 2xx.
 */
export class HttpError extends AppLinkError {
  override name = "HttpError";
  /** The HTTP status of the response, such as `404` for an unknown authorization. */
  readonly status: number;
  /** The response body as UTF-8 text, with invalid bytes replaced. At most 1 MiB is read. */
  readonly body: string;

  /**
   * @param message The error message.
   * @param status The HTTP status of the response.
   * @param body The response body.
   */
  constructor(message: string, status: number, body: string) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

/**
 * The AppLink API returned the authorization, but it isn't `authorized`, for
 * example because it is still being authorized or was disconnected.
 */
export class UnusableAuthorizationError extends AppLinkError {
  override name = "UnusableAuthorizationError";
  /** The status of the authorization. */
  readonly status: AuthorizationStatus;

  /**
   * @param message The error message.
   * @param status The status of the authorization.
   */
  constructor(message: string, status: AuthorizationStatus) {
    super(message);
    this.status = status;
  }
}

/**
 * The AppLink API responded with a 2xx status, but its content doesn't match
 * what the SDK expects, such as a missing required field.
 */
export class UnexpectedResponseError extends AppLinkError {
  override name = "UnexpectedResponseError";
}
