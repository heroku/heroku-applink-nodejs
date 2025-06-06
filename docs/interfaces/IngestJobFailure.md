[**@heroku/applink v1.0.0-ea.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.0](../README.md) / IngestJobFailure

# Interface: IngestJobFailure

Represent a failure result from calling [BulkApi.ingest](BulkApi.md#ingest).

## Properties

### error

```ts
error: BulkApiError;
```

The error that occurred while attempting to construct the ingest job.

#### Defined in

[src/index.ts:1014](https://github.com/heroku/heroku-applink-nodejs/blob/87c92510086d403ff167f2c2ca165bec2e25023f/src/index.ts#L1014)

***

### jobReference?

```ts
optional jobReference: IngestJobReference;
```

A reference to the ingest job created. If the failure occurs when attempting to open
an ingest job there will be no reference. If the failure occurs when uploading or closing
the ingest job then a job reference will be present.

#### Defined in

[src/index.ts:1026](https://github.com/heroku/heroku-applink-nodejs/blob/87c92510086d403ff167f2c2ca165bec2e25023f/src/index.ts#L1026)

***

### unprocessedRecords

```ts
unprocessedRecords: DataTable;
```

The data that would have been uploaded to the ingest job had the operation succeeded.

#### Defined in

[src/index.ts:1019](https://github.com/heroku/heroku-applink-nodejs/blob/87c92510086d403ff167f2c2ca165bec2e25023f/src/index.ts#L1019)
