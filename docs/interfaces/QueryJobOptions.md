[**@heroku/applink v1.0.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2](../README.md) / QueryJobOptions

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

[src/index.ts:621](https://github.com/heroku/heroku-applink-nodejs/blob/31981721b825d45f2df33fe0866b8893464786ca/src/index.ts#L621)

***

### soql

```ts
soql: string;
```

The SOQL query to execute

#### Defined in

[src/index.ts:615](https://github.com/heroku/heroku-applink-nodejs/blob/31981721b825d45f2df33fe0866b8893464786ca/src/index.ts#L615)
