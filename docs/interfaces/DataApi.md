[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / DataApi

# Interface: DataApi

Data API client to interact with data in a Salesforce org.

## Properties

### accessToken

```ts
readonly accessToken: string;
```

The access token used by this API client. Can be used to initialize a
third-party API client or to perform custom API calls with a HTTP library.

#### Defined in

[src/index.ts:302](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L302)

## Methods

### commitUnitOfWork()

```ts
commitUnitOfWork(unitOfWork): Promise<Map<ReferenceId, RecordModificationResult>>
```

Commits a [UnitOfWork](UnitOfWork.md), executing all operations registered with it. If any of these
operations fail, the whole unit is rolled back. To examine results for a single operation,
inspect the returned map (which is keyed with [ReferenceId](ReferenceId.md) returned from
[UnitOfWork#registerCreate](UnitOfWork.md#registercreate) and [UnitOfWork#registerUpdate](UnitOfWork.md#registerupdate)).

#### Parameters

• **unitOfWork**: [`UnitOfWork`](UnitOfWork.md)

The [UnitOfWork](UnitOfWork.md) to commit.

#### Returns

`Promise`\<`Map`\<[`ReferenceId`](ReferenceId.md), [`RecordModificationResult`](RecordModificationResult.md)\>\>

A map of [RecordModificationResult](RecordModificationResult.md)s, indexed by their [ReferenceId](ReferenceId.md)s.

#### Defined in

[src/index.ts:354](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L354)

***

### create()

```ts
create(record): Promise<RecordModificationResult>
```

Creates a new record described by the given [RecordForCreate](../type-aliases/RecordForCreate.md).

#### Parameters

• **record**: [`RecordForCreate`](../type-aliases/RecordForCreate.md)

The record create description.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the created data wrapped in a Promise.

#### Defined in

[src/index.ts:323](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L323)

***

### delete()

```ts
delete(type, id): Promise<RecordModificationResult>
```

Deletes a record, based on the given type and id.

#### Parameters

• **type**: `string`

The object type of the record to delete.

• **id**: `string`

The id of the record to delete.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the deleted data wrapped in a Promise.

#### Defined in

[src/index.ts:338](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L338)

***

### newUnitOfWork()

```ts
newUnitOfWork(): UnitOfWork
```

Creates a new and empty [UnitOfWork](UnitOfWork.md).

#### Returns

[`UnitOfWork`](UnitOfWork.md)

An empty [UnitOfWork](UnitOfWork.md).

#### Defined in

[src/index.ts:344](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L344)

***

### query()

```ts
query(soql): Promise<RecordQueryResult>
```

Queries for records with a given SOQL string.

#### Parameters

• **soql**: `string`

The SOQL string.

#### Returns

`Promise`\<[`RecordQueryResult`](RecordQueryResult.md)\>

A [RecordQueryResult](RecordQueryResult.md) that contains the queried data wrapped in a Promise.

#### Defined in

[src/index.ts:309](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L309)

***

### queryMore()

```ts
queryMore(recordQueryResult): Promise<RecordQueryResult>
```

Queries for more records, based on the given [RecordQueryResult](RecordQueryResult.md).

#### Parameters

• **recordQueryResult**: [`RecordQueryResult`](RecordQueryResult.md)

The query result to query more data for.

#### Returns

`Promise`\<[`RecordQueryResult`](RecordQueryResult.md)\>

A [RecordQueryResult](RecordQueryResult.md) that contains the queried data wrapped in a Promise.

#### Defined in

[src/index.ts:316](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L316)

***

### update()

```ts
update(update): Promise<RecordModificationResult>
```

Updates an existing record described by the given [RecordForUpdate](../type-aliases/RecordForUpdate.md).

#### Parameters

• **update**: [`RecordForUpdate`](../type-aliases/RecordForUpdate.md)

The record update description.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the updated data wrapped in a Promise.

#### Defined in

[src/index.ts:330](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L330)
