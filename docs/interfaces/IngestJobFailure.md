[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / IngestJobFailure

# Interface: IngestJobFailure

Represent a failure result from calling [BulkApi.ingest](BulkApi.md#ingest).

## Properties

### error

```ts
error: BulkApiError;
```

The error that occurred while attempting to construct the ingest job.

#### Defined in

[src/index.ts:1010](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1010)

***

### jobReference?

```ts
optional jobReference: IngestJobReference;
```

A reference to the ingest job created. If the failure occurs when attempting to open
an ingest job there will be no reference. If the failure occurs when uploading or closing
the ingest job then a job reference will be present.

#### Defined in

[src/index.ts:1022](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1022)

***

### unprocessedRecords

```ts
unprocessedRecords: DataTable;
```

The data that would have been uploaded to the ingest job had the operation succeeded.

#### Defined in

[src/index.ts:1015](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1015)
