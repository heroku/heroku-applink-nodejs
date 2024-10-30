[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / QueriedRecord

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

[src/index.ts:193](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L193)
