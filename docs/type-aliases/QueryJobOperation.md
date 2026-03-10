[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / QueryJobOperation

# Type Alias: QueryJobOperation

```ts
type QueryJobOperation = "query" | "queryAll";
```

Defined in: [src/index.ts:896](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L896)

The processing operation for a query job. Possible values are:
- `query`: Returns data that has not been deleted or archived. For more information, see [query()](https://developer.salesforce.com/docs/atlas.en-us.234.0.api.meta/api/sforce_api_calls_query.htm) in the SOAP API Developer Guide.
- `queryAll`: Returns records that have been deleted because of a merge or delete, and returns information about archived Task and Event records. For more information, see [queryAll()](https://developer.salesforce.com/docs/atlas.en-us.234.0.api.meta/api/sforce_api_calls_queryall.htm) in the SOAP API Developer Guide.
