[**@heroku/applink v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea](../README.md) / QueriedRecord

# Type Alias: QueriedRecord

```ts
type QueriedRecord: Record & object;
```

Records returned from a query or queryMore request

## Type declaration

### subQueryResults

```ts
readonly subQueryResults: object;
```

Returns the result of a sub query related to this record. Records can have sub query results when the record is the result of a relationship query.

#### Index Signature

 \[`sObjectName`: `string`\]: [`RecordQueryResult`](../interfaces/RecordQueryResult.md)

## Defined in

[src/index.ts:197](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L197)
