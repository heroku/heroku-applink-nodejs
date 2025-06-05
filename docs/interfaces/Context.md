[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / Context

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

[src/index.ts:139](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L139)

***

### org?

```ts
readonly optional org: Org;
```

Information about the invoking Salesforce organization.

#### Defined in

[src/index.ts:140](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L140)
