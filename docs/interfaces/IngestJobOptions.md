[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / IngestJobOptions

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

[src/index.ts:600](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L600)

***

### dataTable

```ts
dataTable: DataTable;
```

The data table to be ingested

#### Defined in

[src/index.ts:577](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L577)

***

### externalIdFieldName?

```ts
optional externalIdFieldName: string;
```

The external ID field in the object being updated. Only needed for upsert
operations. Field values must also exist in CSV job data.

#### Defined in

[src/index.ts:593](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L593)

***

### object

```ts
object: string;
```

The object type for the data being processed. Use only a single object type per job.

#### Defined in

[src/index.ts:582](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L582)

***

### operation

```ts
operation: IngestJobOperation;
```

The processing operation for the job

#### Defined in

[src/index.ts:587](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L587)
