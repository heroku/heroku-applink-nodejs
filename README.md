# Heroku AppLink SDK for Node.js

The Heroku AppLink SDK lets Heroku apps find out who invoked them from Salesforce, and look up the credentials of stored [Heroku AppLink](https://devcenter.heroku.com/articles/heroku-applink) authorizations. Apps call Salesforce APIs with the Salesforce client of their choice, using the org and credentials the SDK returns.

## Installation

```sh
npm install @heroku/applink
```

Requires Node.js 24 or newer.

## Handling invocations from Salesforce

When Salesforce invokes your app through AppLink, `parseInvocationContext` decodes the `x-client-context` header of the request:

```ts
import express from "express";
import {
  InvalidInboundDataError,
  parseInvocationContext,
} from "@heroku/applink";

const app = express();

app.post("/accounts", (req, res) => {
  let context;
  try {
    context = parseInvocationContext((name) => req.get(name));
  } catch (error) {
    if (error instanceof InvalidInboundDataError) {
      return res.status(400).send("Not an AppLink request");
    }
    throw error;
  }

  console.log(`Invoked by ${context.user.username} in org ${context.org.id}`);
  res.json({ requestId: context.requestId });
});
```

`context.credentials` holds an access token for the invoking user if the invocation carries one.

## Looking up an authorization

`getAuthorization` looks up a stored authorization through the AppLink API. Pass the org and credentials to a Salesforce client, for example [jsforce](https://jsforce.github.io/):

```ts
import { getAuthorization } from "@heroku/applink";
import jsforce from "jsforce";

const context = await getAuthorization("<my-authorization>");

const salesforce = new jsforce.Connection({
  instanceUrl: context.org.domainUrl,
  accessToken: context.credentials.accessToken,
  version: context.org.apiVersion,
});

const result = await salesforce.query("SELECT Id, Name FROM Account");
```

To use another AppLink add-on attachment than the default `HEROKU_APPLINK`, pass its name, color, or API URL:

```ts
// By name, reads HEROKU_APPLINK_PURPLE_API_URL and HEROKU_APPLINK_PURPLE_TOKEN
const context = await getAuthorization(
  "<my-authorization>",
  "HEROKU_APPLINK_PURPLE",
);

// By color, reads the same config vars as the name
const context = await getAuthorization("<my-authorization>", "purple");

// By API URL, uses the attachment whose _API_URL config var holds that URL
const apiUrl = process.env.HEROKU_APPLINK_PURPLE_API_URL;
if (!apiUrl) throw new Error("HEROKU_APPLINK_PURPLE_API_URL is not set.");
const context = await getAuthorization("<my-authorization>", apiUrl);
```

An API URL must match the value of exactly one of the app's config vars ending in `_API_URL`.

Every lookup sends a request to the AppLink API. You can keep a context and reuse it until `context.credentials.expiration`, then look it up again for a new access token.

## Errors

All errors extend `AppLinkError`:

| Error                        | Cause                                                             |
| ---------------------------- | ----------------------------------------------------------------- |
| `InvalidInboundDataError`    | The `x-client-context` header is missing or malformed.            |
| `ConfigurationError`         | The input or the AppLink config vars are missing or invalid.      |
| `TransportError`             | The request to the AppLink API didn't complete.                   |
| `HttpError`                  | The AppLink API responded with a non-2xx `status`, such as `404`. |
| `UnusableAuthorizationError` | The authorization's `status` isn't `authorized`.                  |
| `UnexpectedResponseError`    | The AppLink API response doesn't have the expected content.       |

## Development

```sh
npm install
npm test
npm run lint
npm run format
```

The tests read the shared [test vectors](https://github.com/heroku/heroku-applink-sdks) from the `test-vectors` submodule. Run `git submodule update --init` after cloning to fetch them.
