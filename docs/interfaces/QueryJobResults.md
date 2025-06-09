[**@heroku/applink v1.0.0-ea.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.1](../README.md) / QueryJobResults

# Interface: QueryJobResults

A paged result set that contains the results of a query job. The results of a query job
can be retrieved using the [BulkApi.getQueryResults](BulkApi.md#getqueryresults) and [BulkApi.getMoreQueryResults](BulkApi.md#getmorequeryresults)
methods of [BulkApi](BulkApi.md).

## Properties

### dataTable

```ts
readonly dataTable: DataTable;
```

A data table containing a set of one or more query results.

#### Defined in

[src/index.ts:907](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L907)

***

### done

```ts
readonly done: boolean;
```

This flag indicates if this is the final set of query results.

#### Defined in

[src/index.ts:912](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L912)

***

### jobReference

```ts
readonly jobReference: QueryJobReference;
```

The reference of the query job this result set belongs to.

#### Defined in

[src/index.ts:927](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L927)

***

### locator?

```ts
readonly optional locator: string;
```

A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.

#### Defined in

[src/index.ts:917](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L917)

***

### numberOfRecords

```ts
readonly numberOfRecords: number;
```

The number of records in this set.

#### Defined in

[src/index.ts:922](https://github.com/heroku/heroku-applink-nodejs/blob/2642d389dda315880ee5a3612d84ccbd71f43b77/src/index.ts#L922)
