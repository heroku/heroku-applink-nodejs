[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / IngestJobInfo

# Interface: IngestJobInfo

Defined in: [src/index.ts:792](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L792)

Ingest job information returned when calling [BulkApi.getInfo](BulkApi.md#getinfo) with an [ingest job reference](IngestJobReference.md)

## Extends

- `JobInfo`

## Properties

### apexProcessingTime?

```ts
optional apexProcessingTime: number;
```

Defined in: [src/index.ts:678](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L678)

The number of milliseconds taken to process triggers and other processes
related to the job data. This doesn't include the time used for processing
asynchronous and batch Apex operations. If there are no triggers, the value is 0.

#### Inherited from

```ts
JobInfo.apexProcessingTime
```

***

### apiActiveProcessingTime?

```ts
optional apiActiveProcessingTime: number;
```

Defined in: [src/index.ts:685](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L685)

The number of milliseconds taken to actively process the job and includes
apexProcessingTime, but doesn't include the time the job waited in the queue
to be processed or the time required for serialization and deserialization.

#### Inherited from

```ts
JobInfo.apiActiveProcessingTime
```

***

### apiVersion

```ts
apiVersion: number;
```

Defined in: [src/index.ts:690](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L690)

The API version that the job was created in.

#### Inherited from

```ts
JobInfo.apiVersion
```

***

### assignmentRuleId?

```ts
optional assignmentRuleId: string;
```

Defined in: [src/index.ts:811](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L811)

The ID of an assignment rule to run for a Case or a Lead.

#### Overrides

```ts
JobInfo.assignmentRuleId
```

***

### columnDelimiter

```ts
columnDelimiter: "COMMA";
```

Defined in: [src/index.ts:695](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L695)

The column delimiter used for CSV job data.

#### Inherited from

```ts
JobInfo.columnDelimiter
```

***

### concurrencyMode

```ts
concurrencyMode: "Parallel";
```

Defined in: [src/index.ts:700](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L700)

How the request was processed.

#### Inherited from

```ts
JobInfo.concurrencyMode
```

***

### contentType

```ts
contentType: "CSV";
```

Defined in: [src/index.ts:705](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L705)

The format of the data being processed. Only CSV is supported.

#### Inherited from

```ts
JobInfo.contentType
```

***

### contentUrl?

```ts
optional contentUrl: string;
```

Defined in: [src/index.ts:710](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L710)

The URL to use for Upload job Data requests for this job. Only valid if the job is in Open state.

#### Inherited from

```ts
JobInfo.contentUrl
```

***

### createdById

```ts
createdById: string;
```

Defined in: [src/index.ts:715](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L715)

The ID of the user who created the job.

#### Inherited from

```ts
JobInfo.createdById
```

***

### createdDate

```ts
createdDate: string;
```

Defined in: [src/index.ts:720](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L720)

The date and time in the UTC time zone when the job was created.

#### Inherited from

```ts
JobInfo.createdDate
```

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

Defined in: [src/index.ts:816](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L816)

The name of the external ID field for an upsert.

#### Overrides

```ts
JobInfo.externalIdFieldName
```

***

### id

```ts
id: string;
```

Defined in: [src/index.ts:725](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L725)

Unique ID for this job.

#### Inherited from

```ts
JobInfo.id
```

***

### jobType

```ts
jobType: "V2Ingest";
```

Defined in: [src/index.ts:796](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L796)

The job’s type.

#### Overrides

```ts
JobInfo.jobType
```

***

### lineEnding

```ts
lineEnding: "LF";
```

Defined in: [src/index.ts:735](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L735)

The line ending used for CSV job data.

#### Inherited from

```ts
JobInfo.lineEnding
```

***

### numberRecordsFailed?

```ts
optional numberRecordsFailed: number;
```

Defined in: [src/index.ts:821](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L821)

The number of records that were not processed successfully in this job.

#### Overrides

```ts
JobInfo.numberRecordsFailed
```

***

### numberRecordsProcessed?

```ts
optional numberRecordsProcessed: number;
```

Defined in: [src/index.ts:826](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L826)

The number of records already processed.

#### Overrides

```ts
JobInfo.numberRecordsProcessed
```

***

### object

```ts
object: string;
```

Defined in: [src/index.ts:740](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L740)

The object type for the data being processed.

#### Inherited from

```ts
JobInfo.object
```

***

### operation

```ts
operation: IngestJobOperation;
```

Defined in: [src/index.ts:801](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L801)

The processing operation for the job.

#### Overrides

```ts
JobInfo.operation
```

***

### retries?

```ts
optional retries: number;
```

Defined in: [src/index.ts:751](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L751)

The number of times that Salesforce attempted to save the results of an
operation. The repeated attempts are due to a problem, such as a lock contention.

#### Inherited from

```ts
JobInfo.retries
```

***

### state

```ts
state: IngestJobState;
```

Defined in: [src/index.ts:806](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L806)

The current state of processing for the job.

#### Overrides

```ts
JobInfo.state
```

***

### systemModstamp

```ts
systemModstamp: string;
```

Defined in: [src/index.ts:761](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L761)

Date and time in the UTC time zone when the job finished.

#### Inherited from

```ts
JobInfo.systemModstamp
```

***

### totalProcessingTime?

```ts
optional totalProcessingTime: number;
```

Defined in: [src/index.ts:766](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L766)

The number of milliseconds taken to process the job.

#### Inherited from

```ts
JobInfo.totalProcessingTime
```
