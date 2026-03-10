[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / DataApi

# Interface: DataApi

Defined in: [src/index.ts:305](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L305)

Data API client to interact with data in a Salesforce org.

## Properties

### accessToken

```ts
readonly accessToken: string;
```

Defined in: [src/index.ts:306](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L306)

The access token used by this API client. Can be used to initialize a
third-party API client or to perform custom API calls with a HTTP library.

## Methods

### commitUnitOfWork()

```ts
commitUnitOfWork(unitOfWork): Promise<Map<ReferenceId, RecordModificationResult>>;
```

Defined in: [src/index.ts:358](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L358)

Commits a [UnitOfWork](UnitOfWork.md), executing all operations registered with it. If any of these
operations fail, the whole unit is rolled back. To examine results for a single operation,
inspect the returned map (which is keyed with [ReferenceId](ReferenceId.md) returned from
[UnitOfWork#registerCreate](UnitOfWork.md#registercreate) and [UnitOfWork#registerUpdate](UnitOfWork.md#registerupdate)).

#### Parameters

##### unitOfWork

[`UnitOfWork`](UnitOfWork.md)

The [UnitOfWork](UnitOfWork.md) to commit.

#### Returns

`Promise`\<`Map`\<[`ReferenceId`](ReferenceId.md), [`RecordModificationResult`](RecordModificationResult.md)\>\>

A map of [RecordModificationResult](RecordModificationResult.md)s, indexed by their [ReferenceId](ReferenceId.md)s.

***

### create()

```ts
create(record): Promise<RecordModificationResult>;
```

Defined in: [src/index.ts:327](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L327)

Creates a new record described by the given [RecordForCreate](../type-aliases/RecordForCreate.md).

#### Parameters

##### record

[`RecordForCreate`](../type-aliases/RecordForCreate.md)

The record create description.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the created data wrapped in a Promise.

***

### delete()

```ts
delete(type, id): Promise<RecordModificationResult>;
```

Defined in: [src/index.ts:342](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L342)

Deletes a record, based on the given type and id.

#### Parameters

##### type

`string`

The object type of the record to delete.

##### id

`string`

The id of the record to delete.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the deleted data wrapped in a Promise.

***

### newUnitOfWork()

```ts
newUnitOfWork(): UnitOfWork;
```

Defined in: [src/index.ts:348](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L348)

Creates a new and empty [UnitOfWork](UnitOfWork.md).

#### Returns

[`UnitOfWork`](UnitOfWork.md)

An empty [UnitOfWork](UnitOfWork.md).

***

### query()

```ts
query(soql): Promise<RecordQueryResult>;
```

Defined in: [src/index.ts:313](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L313)

Queries for records with a given SOQL string.

#### Parameters

##### soql

`string`

The SOQL string.

#### Returns

`Promise`\<[`RecordQueryResult`](RecordQueryResult.md)\>

A [RecordQueryResult](RecordQueryResult.md) that contains the queried data wrapped in a Promise.

***

### queryMore()

```ts
queryMore(recordQueryResult): Promise<RecordQueryResult>;
```

Defined in: [src/index.ts:320](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L320)

Queries for more records, based on the given [RecordQueryResult](RecordQueryResult.md).

#### Parameters

##### recordQueryResult

[`RecordQueryResult`](RecordQueryResult.md)

The query result to query more data for.

#### Returns

`Promise`\<[`RecordQueryResult`](RecordQueryResult.md)\>

A [RecordQueryResult](RecordQueryResult.md) that contains the queried data wrapped in a Promise.

***

### update()

```ts
update(update): Promise<RecordModificationResult>;
```

Defined in: [src/index.ts:334](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L334)

Updates an existing record described by the given [RecordForUpdate](../type-aliases/RecordForUpdate.md).

#### Parameters

##### update

[`RecordForUpdate`](../type-aliases/RecordForUpdate.md)

The record update description.

#### Returns

`Promise`\<[`RecordModificationResult`](RecordModificationResult.md)\>

A [RecordModificationResult](RecordModificationResult.md) that contains the updated data wrapped in a Promise.
