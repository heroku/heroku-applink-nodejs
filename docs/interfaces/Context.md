[**@heroku/applink v1.0.0-ea.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.0](../README.md) / Context

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

[src/index.ts:139](https://github.com/heroku/heroku-applink-nodejs/blob/87c92510086d403ff167f2c2ca165bec2e25023f/src/index.ts#L139)

***

### org?

```ts
readonly optional org: Org;
```

Information about the invoking Salesforce organization.

#### Defined in

[src/index.ts:140](https://github.com/heroku/heroku-applink-nodejs/blob/87c92510086d403ff167f2c2ca165bec2e25023f/src/index.ts#L140)
