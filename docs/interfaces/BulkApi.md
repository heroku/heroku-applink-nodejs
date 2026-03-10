[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / BulkApi

# Interface: BulkApi

Defined in: [src/index.ts:417](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L417)

Provides operations that can be used to create and interact with the
Bulk API 2.0 ingest and query jobs.

## Methods

### abort()

```ts
abort(jobReference): Promise<void>;
```

Defined in: [src/index.ts:426](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L426)

This operation will set the state of an Ingest or query job to `Aborted`.
An aborted job will not be queued or processed.

#### Parameters

##### jobReference

The reference of the job to abort

[`IngestJobReference`](IngestJobReference.md) | [`QueryJobReference`](QueryJobReference.md)

#### Returns

`Promise`\<`void`\>

#### See

 - [Bulk API 2.0 Ingest / Close or Abort a Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/close_job.htm)
 - [Bulk API 2.0 Query / Abort a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_abort_job.htm)

***

### createDataTableBuilder()

```ts
createDataTableBuilder(columns): DataTableBuilder;
```

Defined in: [src/index.ts:433](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L433)

Creates a [DataTableBuilder](DataTableBuilder.md) that can be used to construct [DataTable](DataTable.md) instances.

#### Parameters

##### columns

\[`string`, `...string[]`\]

The names of the columns to include in the [DataTable](DataTable.md)

#### Returns

[`DataTableBuilder`](DataTableBuilder.md)

***

### delete()

```ts
delete(jobReference): Promise<void>;
```

Defined in: [src/index.ts:443](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L443)

Deletes an ingest or query job. The job must have a state of `UploadComplete`,
`JobComplete`, `Aborted`, or `Failed`

#### Parameters

##### jobReference

The reference of the job to delete

[`IngestJobReference`](IngestJobReference.md) | [`QueryJobReference`](QueryJobReference.md)

#### Returns

`Promise`\<`void`\>

#### See

 - [Bulk API 2.0 Ingest / Delete a Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/delete_job.htm)
 - [Bulk API 2.0 Query / Delete a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_delete_job.htm)

***

### formatDate()

```ts
formatDate(value): string;
```

Defined in: [src/index.ts:460](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L460)

Produces a formatted `date` field from a JavaScript Date object. Will raise an
error if the provided Date is invalid.

#### Parameters

##### value

`Date`

The Date to convert into the `date` format

#### Returns

`string`

#### See

[Bulk API 2.0 Ingest / Valid Date Format in Records (2.0)](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm)

***

### formatDateTime()

```ts
formatDateTime(value): string;
```

Defined in: [src/index.ts:469](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L469)

Produces a formatted `dateTime` field from a JavaScript Date object. Will raise an
error if the provided Date is invalid.

#### Parameters

##### value

`Date`

The Date to convert into the `dateTime` format

#### Returns

`string`

#### See

[Bulk API 2.0 Ingest / Valid Date Format in Records (2.0)](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm)

***

### formatNullValue()

```ts
formatNullValue(): string;
```

Defined in: [src/index.ts:451](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L451)

Empty field values are ignored when you update records. To set a field value
to `null` use this formatter which will set the field value to `#N/A`.

#### Returns

`string`

#### See

[Bulk API 2.0 Ingest / Prepare CSV Files](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)

***

### getFailedResults()

```ts
getFailedResults(jobReference): Promise<DataTable>;
```

Defined in: [src/index.ts:480](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L480)

Retrieve the list of failed records for a completed ingest job. The returned [DataTable](DataTable.md) will contain the following:
- `sf__Error`: Error code and message, if applicable.
- `sf__Id`: ID of the record that had an error during processing, if applicable.
- Field data for the row that was provided in the original job data upload request.

#### Parameters

##### jobReference

[`IngestJobReference`](IngestJobReference.md)

The reference of the job to get the failed results for

#### Returns

`Promise`\<[`DataTable`](DataTable.md)\>

#### See

[Bulk API 2.0 Reference / Get Job Failed Record Results](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/get_job_failed_results.htm)

***

### getInfo()

```ts
getInfo(jobReference): Promise<IngestJobInfo | QueryJobInfo>;
```

Defined in: [src/index.ts:489](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L489)

Fetches the current information about an ingest or query job.

#### Parameters

##### jobReference

The reference of the job to fetch information about

[`IngestJobReference`](IngestJobReference.md) | [`QueryJobReference`](QueryJobReference.md)

#### Returns

`Promise`\<[`IngestJobInfo`](IngestJobInfo.md) \| [`QueryJobInfo`](QueryJobInfo.md)\>

#### See

 - [Bulk API 2.0 Ingest / Get Job Info](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/get_job_info.htm)
 - [Bulk API 2.0 Query / Get Information About a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_get_one_job.htm)

***

### getMoreQueryResults()

```ts
getMoreQueryResults(queryJobResults, getQueryJobResultsOptions?): Promise<QueryJobResults>;
```

Defined in: [src/index.ts:500](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L500)

Gets the next set of results for a query job.

#### Parameters

##### queryJobResults

[`QueryJobResults`](QueryJobResults.md)

The current query job result set

##### getQueryJobResultsOptions?

[`GetQueryJobResultsOptions`](GetQueryJobResultsOptions.md)

Optional configuration that can be specified when fetching query results

#### Returns

`Promise`\<[`QueryJobResults`](QueryJobResults.md)\>

#### See

[Bulk API 2.0 Query / Get Results for a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_get_job_results.htm)

***

### getQueryResults()

```ts
getQueryResults(jobReference, getQueryJobResultsOptions?): Promise<QueryJobResults>;
```

Defined in: [src/index.ts:512](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L512)

Gets the results for a query job.  The job must be in a `JobCompleted` state.

#### Parameters

##### jobReference

[`QueryJobReference`](QueryJobReference.md)

The reference of the job to get the results for

##### getQueryJobResultsOptions?

[`GetQueryJobResultsOptions`](GetQueryJobResultsOptions.md)

Optional configuration that can be specified when fetching query results

#### Returns

`Promise`\<[`QueryJobResults`](QueryJobResults.md)\>

#### See

[Bulk API 2.0 Query / Get Results for a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_get_job_results.htm)

***

### getSuccessfulResults()

```ts
getSuccessfulResults(jobReference): Promise<DataTable>;
```

Defined in: [src/index.ts:526](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L526)

Retrieve the list of successfully processed records for a completed ingest job. The returned [DataTable](DataTable.md) will contain the following:
- `sf__Created`: Indicates if the record was created.
- `sf__Id`: ID of the record that was successfully processed.
- Field data for the row that was provided in the original job data upload request.

#### Parameters

##### jobReference

[`IngestJobReference`](IngestJobReference.md)

The reference of the job to get the successful results for

#### Returns

`Promise`\<[`DataTable`](DataTable.md)\>

#### See

[Bulk API 2.0 Ingest / Get Job Successful Record Results](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/get_job_successful_results.htm)

***

### getUnprocessedRecords()

```ts
getUnprocessedRecords(jobReference): Promise<DataTable>;
```

Defined in: [src/index.ts:534](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L534)

Retrieve the list of successfully processed records for a completed ingest job. The returned [DataTable](DataTable.md) will contain all the columns from the uploaded data.

#### Parameters

##### jobReference

[`IngestJobReference`](IngestJobReference.md)

The reference of the job to get the unprocessed records for

#### Returns

`Promise`\<[`DataTable`](DataTable.md)\>

#### See

[Bulk API 2.0 Ingest / Get Job Unprocessed Record Results](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)

***

### ingest()

```ts
ingest(ingestJobOptions): Promise<(
  | IngestJobReference
| IngestJobFailure)[]>;
```

Defined in: [src/index.ts:551](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L551)

Handles the process of splitting the [DataTable](DataTable.md) to be ingested into one or more [DataTable](DataTable.md)
instances that can fit within the request size limit that can be accepted by the Bulk API v2.
Then, for each [DataTable](DataTable.md) produced during the split, a new ingest job will be created, the data will be uploaded,
and the job will be closed and queued for processing.

The returned value will be a list of one or more ingest job references or a failure result
containing the error that occurred, the unprocessed records, and the created job reference (if applicable).

#### Parameters

##### ingestJobOptions

[`IngestJobOptions`](IngestJobOptions.md)

These are options that can be supplied when creating an ingest job.

#### Returns

`Promise`\<(
  \| [`IngestJobReference`](IngestJobReference.md)
  \| [`IngestJobFailure`](IngestJobFailure.md))[]\>

#### See

 - [Bulk API 2.0 Ingest / Prepare CSV Files](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)
 - [Bulk API 2.0 Ingest / Create a Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/create_job.htm)
 - [Bulk API 2.0 Ingest / Upload Job Data](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/upload_job_data.htm)
 - [Bulk API 2.0 Ingest / Close or Abort a Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/close_job.htm)

***

### query()

```ts
query(options): Promise<QueryJobReference>;
```

Defined in: [src/index.ts:561](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L561)

Creates a new query job for processing.

#### Parameters

##### options

[`QueryJobOptions`](QueryJobOptions.md)

These are options that can be supplied when creating a query job.

#### Returns

`Promise`\<[`QueryJobReference`](QueryJobReference.md)\>

#### See

[Bulk API 2.0 Query / Create a Query Job](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/query_create_job.htm)

***

### splitDataTable()

```ts
splitDataTable(dataTable): DataTable[];
```

Defined in: [src/index.ts:570](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L570)

Splits a [DataTable](DataTable.md) into one or more [DataTable](DataTable.md) instances that are guaranteed
to fit within the upload size limitation of an ingest job.

#### Parameters

##### dataTable

[`DataTable`](DataTable.md)

The [DataTable](DataTable.md) to split

#### Returns

[`DataTable`](DataTable.md)[]

#### See

[Bulk API 2.0 Ingest / Upload Job Data / Usage Notes](https://developer.salesforce.com/docs/atlas.en-us.234.0.api_asynch.meta/api_asynch/upload_job_data.htm)
