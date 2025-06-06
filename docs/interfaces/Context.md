[**@heroku/applink v1.0.0-ea.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.1](../README.md) / Context

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

[src/index.ts:139](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L139)

***

### org?

```ts
readonly optional org: Org;
```

Information about the invoking Salesforce organization.

#### Defined in

[src/index.ts:140](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L140)
