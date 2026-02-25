[**@heroku/applink v1.0.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2](../README.md) / QueryJobOperation

# Type Alias: QueryJobOperation

```ts
type QueryJobOperation: "query" | "queryAll";
```

The processing operation for a query job. Possible values are:
- `query`: Returns data that has not been deleted or archived. For more information, see [query()](https://developer.salesforce.com/docs/atlas.en-us.234.0.api.meta/api/sforce_api_calls_query.htm) in the SOAP API Developer Guide.
- `queryAll`: Returns records that have been deleted because of a merge or delete, and returns information about archived Task and Event records. For more information, see [queryAll()](https://developer.salesforce.com/docs/atlas.en-us.234.0.api.meta/api/sforce_api_calls_queryall.htm) in the SOAP API Developer Guide.

## Defined in

[src/index.ts:896](https://github.com/heroku/heroku-applink-nodejs/blob/31981721b825d45f2df33fe0866b8893464786ca/src/index.ts#L896)
