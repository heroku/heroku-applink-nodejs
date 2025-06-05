[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / QueryJobInfo

# Interface: QueryJobInfo

Query job information returned when calling [BulkApi.getInfo](BulkApi.md#getinfo) with a [query job reference](QueryJobReference.md)

## Extends

- `JobInfo`

## Properties

### apexProcessingTime?

```ts
optional apexProcessingTime: number;
```

The number of milliseconds taken to process triggers and other processes
related to the job data. This doesn't include the time used for processing
asynchronous and batch Apex operations. If there are no triggers, the value is 0.

#### Inherited from

`JobInfo.apexProcessingTime`

#### Defined in

[src/index.ts:678](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L678)

***

### apiActiveProcessingTime?

```ts
optional apiActiveProcessingTime: number;
```

The number of milliseconds taken to actively process the job and includes
apexProcessingTime, but doesn't include the time the job waited in the queue
to be processed or the time required for serialization and deserialization.

#### Inherited from

`JobInfo.apiActiveProcessingTime`

#### Defined in

[src/index.ts:685](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L685)

***

### apiVersion

```ts
apiVersion: number;
```

The API version that the job was created in.

#### Inherited from

`JobInfo.apiVersion`

#### Defined in

[src/index.ts:690](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L690)

***

### assignmentRuleId?

```ts
optional assignmentRuleId: string;
```

The ID of an assignment rule to run for a Case or a Lead.

#### Inherited from

`JobInfo.assignmentRuleId`

#### Defined in

[src/index.ts:771](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L771)

***

### columnDelimiter

```ts
columnDelimiter: "COMMA";
```

The column delimiter used for CSV job data.

#### Inherited from

`JobInfo.columnDelimiter`

#### Defined in

[src/index.ts:695](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L695)

***

### concurrencyMode

```ts
concurrencyMode: "Parallel";
```

How the request was processed.

#### Inherited from

`JobInfo.concurrencyMode`

#### Defined in

[src/index.ts:700](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L700)

***

### contentType

```ts
contentType: "CSV";
```

The format of the data being processed. Only CSV is supported.

#### Inherited from

`JobInfo.contentType`

#### Defined in

[src/index.ts:705](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L705)

***

### contentUrl?

```ts
optional contentUrl: string;
```

The URL to use for Upload job Data requests for this job. Only valid if the job is in Open state.

#### Inherited from

`JobInfo.contentUrl`

#### Defined in

[src/index.ts:710](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L710)

***

### createdById

```ts
createdById: string;
```

The ID of the user who created the job.

#### Inherited from

`JobInfo.createdById`

#### Defined in

[src/index.ts:715](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L715)

***

### createdDate

```ts
createdDate: string;
```

The date and time in the UTC time zone when the job was created.

#### Inherited from

`JobInfo.createdDate`

#### Defined in

[src/index.ts:720](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L720)

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

The name of the external ID field for an upsert.

#### Inherited from

`JobInfo.externalIdFieldName`

#### Defined in

[src/index.ts:776](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L776)

***

### id

```ts
id: string;
```

Unique ID for this job.

#### Inherited from

`JobInfo.id`

#### Defined in

[src/index.ts:725](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L725)

***

### jobType

```ts
jobType: "V2Query";
```

The job’s type.

#### Overrides

`JobInfo.jobType`

#### Defined in

[src/index.ts:836](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L836)

***

### lineEnding

```ts
lineEnding: "LF";
```

The line ending used for CSV job data.

#### Inherited from

`JobInfo.lineEnding`

#### Defined in

[src/index.ts:735](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L735)

***

### numberRecordsFailed?

```ts
optional numberRecordsFailed: number;
```

The number of records that were not processed successfully in this job.

#### Inherited from

`JobInfo.numberRecordsFailed`

#### Defined in

[src/index.ts:781](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L781)

***

### numberRecordsProcessed?

```ts
optional numberRecordsProcessed: number;
```

The number of records already processed.

#### Inherited from

`JobInfo.numberRecordsProcessed`

#### Defined in

[src/index.ts:786](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L786)

***

### object

```ts
object: string;
```

The object type for the data being processed.

#### Inherited from

`JobInfo.object`

#### Defined in

[src/index.ts:740](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L740)

***

### operation

```ts
operation: QueryJobOperation;
```

The processing operation for the job.

#### Overrides

`JobInfo.operation`

#### Defined in

[src/index.ts:841](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L841)

***

### retries?

```ts
optional retries: number;
```

The number of times that Salesforce attempted to save the results of an
operation. The repeated attempts are due to a problem, such as a lock contention.

#### Inherited from

`JobInfo.retries`

#### Defined in

[src/index.ts:751](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L751)

***

### state

```ts
state: QueryJobState;
```

The current state of processing for the job.

#### Overrides

`JobInfo.state`

#### Defined in

[src/index.ts:846](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L846)

***

### systemModstamp

```ts
systemModstamp: string;
```

Date and time in the UTC time zone when the job finished.

#### Inherited from

`JobInfo.systemModstamp`

#### Defined in

[src/index.ts:761](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L761)

***

### totalProcessingTime?

```ts
optional totalProcessingTime: number;
```

The number of milliseconds taken to process the job.

#### Inherited from

`JobInfo.totalProcessingTime`

#### Defined in

[src/index.ts:766](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L766)
