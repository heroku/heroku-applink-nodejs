[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / GetQueryJobResultsOptions

# Interface: GetQueryJobResultsOptions

There are options that can be supplied when retrieving the results for a query job using the
[BulkApi.getQueryResults](BulkApi.md#getqueryresults) and [BulkApi.getMoreQueryResults](BulkApi.md#getmorequeryresults) methods of [BulkApi](BulkApi.md).

## Properties

### maxRecords

```ts
maxRecords: number;
```

The maximum number of records to retrieve per set of results for the query. The request
is still subject to the size limits.

If you are working with a very large number of query results, you may experience a timeout before receiving all the data
from Salesforce. To prevent a timeout, specify the maximum number of records your client is expecting to receive in the
`maxRecords` parameter. This splits the results into smaller sets with this value as the maximum size.

If you don’t provide a value for this parameter, the server uses a default value based on the service.

#### Defined in

[src/index.ts:665](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L665)
