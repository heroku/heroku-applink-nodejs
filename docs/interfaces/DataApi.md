[**@heroku/applink v1.0.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0](../README.md) / DataApi

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

[src/index.ts:306](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L306)

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

[src/index.ts:358](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L358)

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

[src/index.ts:327](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L327)

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

[src/index.ts:342](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L342)

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

[src/index.ts:348](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L348)

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

[src/index.ts:313](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L313)

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

[src/index.ts:320](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L320)

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

[src/index.ts:334](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L334)
