import type { InspectOptionsStylized, inspect } from "node:util";

/**
 * The type of a Salesforce org, as returned by the AppLink API.
 */
export type OrgType = "SalesforceOrg" | "DataCloudOrg";

/**
 * The status of an authorization, as returned by the AppLink API.
 *
 * Only `authorized` authorizations can be used. Apps only see the other
 * statuses in an {@link UnusableAuthorizationError}.
 *
 * @see https://devcenter.heroku.com/articles/heroku-applink-api
 */
export type AuthorizationStatus =
  "authorizing" | "authorized" | "disconnecting" | "disconnected" | "failed";

/**
 * A Salesforce org that the app works with.
 */
export interface Org {
  /** The ID of the org. */
  readonly id: string;
  /** The org's My Domain URL. Pass it to a Salesforce client as the instance URL. */
  readonly domainUrl: string;
  /** The org's Salesforce API version, such as `62.0`. */
  readonly apiVersion: string;
  /**
   * The type of the org. Present in an {@link AuthorizationAppLinkContext},
   * absent in an {@link InvocationAppLinkContext}.
   */
  readonly type?: OrgType;
}

/**
 * A Salesforce user.
 */
export interface User {
  /** The ID of the user. */
  readonly id: string;
  /** The username of the user. */
  readonly username: string;
}

/**
 * Credentials for calling Salesforce APIs.
 *
 * The string and `util.inspect` representations redact the access token, so it
 * doesn't leak into logs by accident.
 */
export class Credentials {
  /** The Salesforce access token. Pass it to a Salesforce client as the bearer token. */
  readonly accessToken: string;
  /**
   * The instant the access token expires. Absent if AppLink doesn't provide
   * one.
   */
  readonly expiration?: Date;

  /**
   * @param accessToken The Salesforce access token.
   * @param expiration The instant the access token expires, if known.
   */
  constructor(accessToken: string, expiration?: Date) {
    this.accessToken = accessToken;
    if (expiration !== undefined) {
      this.expiration = expiration;
    }
    Object.freeze(this);
  }

  /** Returns a representation of the credentials with the access token redacted. */
  toString(): string {
    const expiration =
      this.expiration === undefined
        ? ""
        : `, expiration=${this.expiration.toISOString()}`;
    return `Credentials(accessToken=[REDACTED]${expiration})`;
  }

  /** @internal */
  [Symbol.for("nodejs.util.inspect.custom")](
    _depth: number,
    options: InspectOptionsStylized,
    inspectFn: typeof inspect,
  ): string {
    const redacted =
      this.expiration === undefined
        ? { accessToken: "[REDACTED]" }
        : { accessToken: "[REDACTED]", expiration: this.expiration };
    return `Credentials ${inspectFn(redacted, options)}`;
  }
}

/**
 * What every context has: the org and the user.
 *
 * Code that only needs the org and the user accepts an `AppLinkContext`, so it
 * works with both kinds of context.
 */
export interface AppLinkContext {
  /** The org the context belongs to. */
  readonly org: Org;
  /** The user acting in the org. */
  readonly user: User;
}

/**
 * The context of an invocation from Salesforce, decoded from the
 * `x-client-context` header by {@link parseInvocationContext}.
 *
 * There is one per inbound request. It describes the invoking user.
 */
export interface InvocationAppLinkContext extends AppLinkContext {
  /** The ID of the invocation. */
  readonly requestId: string;
  /** The invoking org's namespace prefix. Absent when the org has none. */
  readonly namespace?: string;
  /**
   * Credentials for acting as the invoking user. Absent when the invocation
   * carries no access token.
   */
  readonly credentials?: Credentials;
}

/**
 * Metadata of an authorization, as returned by the AppLink API.
 *
 * @see https://devcenter.heroku.com/articles/heroku-applink-api
 */
export interface AuthorizationMetadata {
  /** The ID of the authorization. */
  readonly id: string;
  /** The developer name of the authorization. */
  readonly developerName: string;
  /** The instant the authorization was created. */
  readonly createdAt: Date;
  /** Who created the authorization. */
  readonly createdBy: string;
  /** The app the authorization was created through, if any. */
  readonly createdViaApp?: string;
  /** The instant the authorization was last modified. */
  readonly lastModifiedAt: Date;
  /** Who last modified the authorization, if known. */
  readonly lastModifiedBy?: string;
  /** The redirect URI of the authorization, if any. */
  readonly redirectUri?: string;
}

/**
 * The context of a stored authorization, returned by {@link getAuthorization}.
 *
 * It describes the user the authorization was made for. It is long-lived, and
 * apps can cache and reuse it until `credentials.expiration`.
 */
export interface AuthorizationAppLinkContext extends AppLinkContext {
  /** The metadata of the authorization. */
  readonly authorizationMetadata: AuthorizationMetadata;
  /** Credentials for acting as the authorized user. */
  readonly credentials: Credentials;
}
