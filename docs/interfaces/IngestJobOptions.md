[**@heroku/applink v1.0.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.1](../README.md) / IngestJobOptions

# Interface: IngestJobOptions

These are options that can be supplied when creating an ingest job using the
[BulkApi.ingest](BulkApi.md#ingest) method.

## Properties

### assignmentRuleId?

```ts
optional assignmentRuleId: string;
```

The ID of an assignment rule to run for a Case or a Lead. The assignment rule
can be active or inactive. The ID can be retrieved by using the Lightning
Platform SOAP API or the Lightning Platform REST API to query the AssignmentRule object.

#### Defined in

[src/index.ts:604](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L604)

***

### dataTable

```ts
dataTable: DataTable;
```

The data table to be ingested

#### Defined in

[src/index.ts:581](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L581)

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

The external ID field in the object being updated. Only needed for upsert
operations. Field values must also exist in CSV job data.

#### Defined in

[src/index.ts:597](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L597)

***

### object

```ts
object: string;
```

The object type for the data being processed. Use only a single object type per job.

#### Defined in

[src/index.ts:586](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L586)

***

### operation

```ts
operation: IngestJobOperation;
```

The processing operation for the job

#### Defined in

[src/index.ts:591](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L591)
