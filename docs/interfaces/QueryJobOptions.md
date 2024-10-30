[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / QueryJobOptions

# Interface: QueryJobOptions

These are options that can be supplied when creating a query job using the
[BulkApi.query](BulkApi.md#query) method.

## Properties

### operation?

```ts
optional operation: QueryJobOperation;
```

Indicates if this query job should be processed as a `query` or a `queryAll`
operation. If not provided, the default value `query` will be used.

#### Defined in

[src/index.ts:617](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L617)

***

### soql

```ts
soql: string;
```

The SOQL query to execute

#### Defined in

[src/index.ts:611](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L611)
