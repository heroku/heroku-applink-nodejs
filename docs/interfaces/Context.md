[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / Context

# Interface: Context

Defined in: [src/index.ts:138](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L138)

Represents the connection to the execution environment and the Salesforce instance that
the function is associated with.

## Properties

### id

```ts
readonly id: string;
```

Defined in: [src/index.ts:139](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L139)

The unique identifier for a given execution of a function.

***

### org?

```ts
readonly optional org: Org;
```

Defined in: [src/index.ts:140](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L140)

Information about the invoking Salesforce organization.
