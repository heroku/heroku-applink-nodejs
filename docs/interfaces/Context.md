[**@heroku/applink v1.0.2-beta.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2-beta.1](../README.md) / Context

# Interface: Context

Represents the connection to the execution environment and the Salesforce instance that
the function is associated with.

## Properties

### id

```ts
readonly id: string;
```

The unique identifier for a given execution of a function.

#### Defined in

[src/index.ts:139](https://github.com/heroku/heroku-applink-nodejs/blob/420cfe8c30aeef16e99ca3a0bc0c93186a9a0ac7/src/index.ts#L139)

***

### org?

```ts
readonly optional org: Org;
```

Information about the invoking Salesforce organization.

#### Defined in

[src/index.ts:140](https://github.com/heroku/heroku-applink-nodejs/blob/420cfe8c30aeef16e99ca3a0bc0c93186a9a0ac7/src/index.ts#L140)
