import {
  authorizationPath,
  type Env,
  parseAuthorizationResponse,
  resolveAttachment,
} from "./authorization.ts";
import {
  ConfigurationError,
  HttpError,
  UnexpectedResponseError,
} from "./errors.ts";
import {
  DEFAULT_HTTP_SETTINGS,
  getWithRetries,
  type HttpSettings,
} from "./http.ts";
import type { AuthorizationAppLinkContext } from "./types.ts";
import { USER_AGENT } from "./version.ts";

/**
 * Looks up a stored authorization through the AppLink API.
 *
 * Every call sends a request to the AppLink API. Apps can keep the returned
 * context and reuse it until `credentials.expiration`.
 *
 * @example
 * ```ts
 * const context = await getAuthorization("<my-authorization>");
 * const salesforce = new jsforce.Connection({
 *   instanceUrl: context.org.domainUrl,
 *   accessToken: context.credentials.accessToken,
 *   version: context.org.apiVersion,
 * });
 * ```
 *
 * @example
 * ```ts
 * // By name, reads HEROKU_APPLINK_PURPLE_API_URL and HEROKU_APPLINK_PURPLE_TOKEN
 * const context = await getAuthorization("<my-authorization>", "HEROKU_APPLINK_PURPLE");
 * ```
 *
 * @example
 * ```ts
 * // By color, reads the same config vars as the name
 * const context = await getAuthorization("<my-authorization>", "purple");
 * ```
 *
 * @example
 * ```ts
 * // By API URL, uses the attachment whose _API_URL config var holds that URL
 * const apiUrl = process.env.HEROKU_APPLINK_PURPLE_API_URL;
 * if (!apiUrl) throw new Error("HEROKU_APPLINK_PURPLE_API_URL is not set.");
 * const context = await getAuthorization("<my-authorization>", apiUrl);
 * ```
 *
 * @param developerName The developer name of the authorization.
 * @param attachment The AppLink add-on attachment to use, by name (such as
 *   `HEROKU_APPLINK_PURPLE`), color (such as `purple`), or API URL. Without it,
 *   or with `null`, the SDK uses the default attachment `HEROKU_APPLINK`.
 * @returns The context of the authorization.
 * @throws {ConfigurationError} If the developer name or attachment is empty, or
 *   the config vars are missing or invalid.
 * @throws {TransportError} If the request to the AppLink API didn't complete.
 * @throws {HttpError} If the AppLink API responded with a status other than 2xx.
 * @throws {UnusableAuthorizationError} If the authorization isn't `authorized`.
 * @throws {UnexpectedResponseError} If the response doesn't have the expected content.
 * @see https://devcenter.heroku.com/articles/heroku-applink-api
 */
export function getAuthorization(
  developerName: string,
  attachment?: string | null,
): Promise<AuthorizationAppLinkContext> {
  return getAuthorizationWith(
    process.env,
    DEFAULT_HTTP_SETTINGS,
    developerName,
    attachment,
  );
}

export async function getAuthorizationWith(
  env: Env,
  settings: HttpSettings,
  developerName: string,
  attachment?: string | null,
): Promise<AuthorizationAppLinkContext> {
  if (typeof developerName !== "string") {
    throw new ConfigurationError("The developer name must be a string.");
  }
  if (developerName === "") {
    throw new ConfigurationError("The developer name must not be empty.");
  }
  const { apiUrl, token, appId } = resolveAttachment(env, attachment);

  let url: URL;
  try {
    url = new URL(apiUrl);
  } catch {
    throw new ConfigurationError("The AppLink API URL is not a valid URL.");
  }
  const basePath = url.pathname === "/" ? "" : url.pathname;

  const response = await getWithRetries(
    url,
    basePath + authorizationPath(developerName),
    {
      Authorization: `Bearer ${token}`,
      "X-App-UUID": appId,
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
    settings,
  );

  if (response.status < 200 || response.status > 299) {
    throw new HttpError(
      `The AppLink API responded with HTTP status ${String(response.status)}.`,
      response.status,
      response.body.toString("utf8"),
    );
  }
  if (response.bodyTooLarge) {
    throw new UnexpectedResponseError(
      "The AppLink API response is larger than 1 MiB.",
    );
  }
  return parseAuthorizationResponse(response.body);
}
