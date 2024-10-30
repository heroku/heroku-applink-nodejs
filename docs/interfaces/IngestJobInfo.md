[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / IngestJobInfo

# Interface: IngestJobInfo

Ingest job information returned when calling [BulkApi.getInfo](BulkApi.md#getinfo) with an [ingest job reference](IngestJobReference.md)

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

[src/index.ts:674](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L674)

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

[src/index.ts:681](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L681)

***

### apiVersion

```ts
apiVersion: number;
```

The API version that the job was created in.

#### Inherited from

`JobInfo.apiVersion`

#### Defined in

[src/index.ts:686](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L686)

***

### assignmentRuleId?

```ts
optional assignmentRuleId: string;
```

The ID of an assignment rule to run for a Case or a Lead.

#### Overrides

`JobInfo.assignmentRuleId`

#### Defined in

[src/index.ts:807](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L807)

***

### columnDelimiter

```ts
columnDelimiter: "COMMA";
```

The column delimiter used for CSV job data.

#### Inherited from

`JobInfo.columnDelimiter`

#### Defined in

[src/index.ts:691](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L691)

***

### concurrencyMode

```ts
concurrencyMode: "Parallel";
```

How the request was processed.

#### Inherited from

`JobInfo.concurrencyMode`

#### Defined in

[src/index.ts:696](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L696)

***

### contentType

```ts
contentType: "CSV";
```

The format of the data being processed. Only CSV is supported.

#### Inherited from

`JobInfo.contentType`

#### Defined in

[src/index.ts:701](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L701)

***

### contentUrl?

```ts
optional contentUrl: string;
```

The URL to use for Upload job Data requests for this job. Only valid if the job is in Open state.

#### Inherited from

`JobInfo.contentUrl`

#### Defined in

[src/index.ts:706](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L706)

***

### createdById

```ts
createdById: string;
```

The ID of the user who created the job.

#### Inherited from

`JobInfo.createdById`

#### Defined in

[src/index.ts:711](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L711)

***

### createdDate

```ts
createdDate: string;
```

The date and time in the UTC time zone when the job was created.

#### Inherited from

`JobInfo.createdDate`

#### Defined in

[src/index.ts:716](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L716)

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

The name of the external ID field for an upsert.

#### Overrides

`JobInfo.externalIdFieldName`

#### Defined in

[src/index.ts:812](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L812)

***

### id

```ts
id: string;
```

Unique ID for this job.

#### Inherited from

`JobInfo.id`

#### Defined in

[src/index.ts:721](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L721)

***

### jobType

```ts
jobType: "V2Ingest";
```

The job’s type.

#### Overrides

`JobInfo.jobType`

#### Defined in

[src/index.ts:792](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L792)

***

### lineEnding

```ts
lineEnding: "LF";
```

The line ending used for CSV job data.

#### Inherited from

`JobInfo.lineEnding`

#### Defined in

[src/index.ts:731](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L731)

***

### numberRecordsFailed?

```ts
optional numberRecordsFailed: number;
```

The number of records that were not processed successfully in this job.

#### Overrides

`JobInfo.numberRecordsFailed`

#### Defined in

[src/index.ts:817](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L817)

***

### numberRecordsProcessed?

```ts
optional numberRecordsProcessed: number;
```

The number of records already processed.

#### Overrides

`JobInfo.numberRecordsProcessed`

#### Defined in

[src/index.ts:822](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L822)

***

### object

```ts
object: string;
```

The object type for the data being processed.

#### Inherited from

`JobInfo.object`

#### Defined in

[src/index.ts:736](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L736)

***

### operation

```ts
operation: IngestJobOperation;
```

The processing operation for the job.

#### Overrides

`JobInfo.operation`

#### Defined in

[src/index.ts:797](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L797)

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

[src/index.ts:747](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L747)

***

### state

```ts
state: IngestJobState;
```

The current state of processing for the job.

#### Overrides

`JobInfo.state`

#### Defined in

[src/index.ts:802](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L802)

***

### systemModstamp

```ts
systemModstamp: string;
```

Date and time in the UTC time zone when the job finished.

#### Inherited from

`JobInfo.systemModstamp`

#### Defined in

[src/index.ts:757](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L757)

***

### totalProcessingTime?

```ts
optional totalProcessingTime: number;
```

The number of milliseconds taken to process the job.

#### Inherited from

`JobInfo.totalProcessingTime`

#### Defined in

[src/index.ts:762](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L762)
