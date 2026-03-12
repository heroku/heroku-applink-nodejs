[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / IngestJobFailure

# Interface: IngestJobFailure

Defined in: [src/index.ts:1010](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L1010)

Represent a failure result from calling [BulkApi.ingest](BulkApi.md#ingest).

## Properties

### error

```ts
error: BulkApiError;
```

Defined in: [src/index.ts:1014](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L1014)

The error that occurred while attempting to construct the ingest job.

***

### jobReference?

```ts
optional jobReference: IngestJobReference;
```

Defined in: [src/index.ts:1026](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L1026)

A reference to the ingest job created. If the failure occurs when attempting to open
an ingest job there will be no reference. If the failure occurs when uploading or closing
the ingest job then a job reference will be present.

***

### unprocessedRecords

```ts
unprocessedRecords: DataTable;
```

Defined in: [src/index.ts:1019](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L1019)

The data that would have been uploaded to the ingest job had the operation succeeded.
