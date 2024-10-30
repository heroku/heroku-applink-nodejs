[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / QueryJobResults

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

[src/index.ts:903](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L903)

***

### done

```ts
readonly done: boolean;
```

This flag indicates if this is the final set of query results.

#### Defined in

[src/index.ts:908](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L908)

***

### jobReference

```ts
readonly jobReference: QueryJobReference;
```

The reference of the query job this result set belongs to.

#### Defined in

[src/index.ts:923](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L923)

***

### locator?

```ts
readonly optional locator: string;
```

A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.

#### Defined in

[src/index.ts:913](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L913)

***

### numberOfRecords

```ts
readonly numberOfRecords: number;
```

The number of records in this set.

#### Defined in

[src/index.ts:918](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L918)
