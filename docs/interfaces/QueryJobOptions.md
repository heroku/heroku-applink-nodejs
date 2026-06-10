[**@heroku/applink v1.1.1**](../README.md)

***

[@heroku/applink](../README.md) / QueryJobOptions

# Interface: QueryJobOptions

Defined in: [src/index.ts:611](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L611)

These are options that can be supplied when creating a query job using the
[BulkApi.query](BulkApi.md#query) method.

## Properties

### operation?

```ts
optional operation: QueryJobOperation;
```

Defined in: [src/index.ts:621](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L621)

Indicates if this query job should be processed as a `query` or a `queryAll`
operation. If not provided, the default value `query` will be used.

***

### soql

```ts
soql: string;
```

Defined in: [src/index.ts:615](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L615)

The SOQL query to execute
