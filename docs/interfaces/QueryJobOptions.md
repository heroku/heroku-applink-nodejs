[**@heroku/applink v1.0.0-ea.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.1](../README.md) / QueryJobOptions

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

[src/index.ts:621](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L621)

***

### soql

```ts
soql: string;
```

The SOQL query to execute

#### Defined in

[src/index.ts:615](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L615)
