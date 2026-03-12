[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / QueryJobResults

# Interface: QueryJobResults

Defined in: [src/index.ts:903](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L903)

A paged result set that contains the results of a query job. The results of a query job
can be retrieved using the [BulkApi.getQueryResults](BulkApi.md#getqueryresults) and [BulkApi.getMoreQueryResults](BulkApi.md#getmorequeryresults)
methods of [BulkApi](BulkApi.md).

## Properties

### dataTable

```ts
readonly dataTable: DataTable;
```

Defined in: [src/index.ts:907](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L907)

A data table containing a set of one or more query results.

***

### done

```ts
readonly done: boolean;
```

Defined in: [src/index.ts:912](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L912)

This flag indicates if this is the final set of query results.

***

### jobReference

```ts
readonly jobReference: QueryJobReference;
```

Defined in: [src/index.ts:927](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L927)

The reference of the query job this result set belongs to.

***

### locator?

```ts
readonly optional locator: string;
```

Defined in: [src/index.ts:917](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L917)

A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.

***

### numberOfRecords

```ts
readonly numberOfRecords: number;
```

Defined in: [src/index.ts:922](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L922)

The number of records in this set.
