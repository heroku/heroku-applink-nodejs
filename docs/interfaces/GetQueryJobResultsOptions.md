[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / GetQueryJobResultsOptions

# Interface: GetQueryJobResultsOptions

Defined in: [src/index.ts:658](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L658)

There are options that can be supplied when retrieving the results for a query job using the
[BulkApi.getQueryResults](BulkApi.md#getqueryresults) and [BulkApi.getMoreQueryResults](BulkApi.md#getmorequeryresults) methods of [BulkApi](BulkApi.md).

## Properties

### maxRecords

```ts
maxRecords: number;
```

Defined in: [src/index.ts:669](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L669)

The maximum number of records to retrieve per set of results for the query. The request
is still subject to the size limits.

If you are working with a very large number of query results, you may experience a timeout before receiving all the data
from Salesforce. To prevent a timeout, specify the maximum number of records your client is expecting to receive in the
`maxRecords` parameter. This splits the results into smaller sets with this value as the maximum size.

If you don’t provide a value for this parameter, the server uses a default value based on the service.
