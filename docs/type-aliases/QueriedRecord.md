[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / QueriedRecord

# Type Alias: QueriedRecord

```ts
type QueriedRecord = Record & object;
```

Defined in: [src/index.ts:197](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L197)

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
