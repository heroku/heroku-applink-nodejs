[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / IngestJobOptions

# Interface: IngestJobOptions

Defined in: [src/index.ts:577](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L577)

These are options that can be supplied when creating an ingest job using the
[BulkApi.ingest](BulkApi.md#ingest) method.

## Properties

### assignmentRuleId?

```ts
optional assignmentRuleId: string;
```

Defined in: [src/index.ts:604](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L604)

The ID of an assignment rule to run for a Case or a Lead. The assignment rule
can be active or inactive. The ID can be retrieved by using the Lightning
Platform SOAP API or the Lightning Platform REST API to query the AssignmentRule object.

***

### dataTable

```ts
dataTable: DataTable;
```

Defined in: [src/index.ts:581](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L581)

The data table to be ingested

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

Defined in: [src/index.ts:597](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L597)

The external ID field in the object being updated. Only needed for upsert
operations. Field values must also exist in CSV job data.

***

### object

```ts
object: string;
```

Defined in: [src/index.ts:586](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L586)

The object type for the data being processed. Use only a single object type per job.

***

### operation

```ts
operation: IngestJobOperation;
```

Defined in: [src/index.ts:591](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L591)

The processing operation for the job
