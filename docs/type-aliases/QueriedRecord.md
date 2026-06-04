[**@heroku/applink v1.1.1**](../README.md)

***

[@heroku/applink](../README.md) / QueriedRecord

# Type Alias: QueriedRecord

```ts
type QueriedRecord = Record & object;
```

Defined in: [src/index.ts:197](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L197)

Records returned from a query or queryMore request

## Type Declaration

### subQueryResults

```ts
readonly subQueryResults: object;
```

Returns the result of a sub query related to this record. Records can have sub query results when the record is the result of a relationship query.

#### Index Signature

```ts
[sObjectName: string]: RecordQueryResult
```
