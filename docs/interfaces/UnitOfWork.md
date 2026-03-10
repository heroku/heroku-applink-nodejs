[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / UnitOfWork

# Interface: UnitOfWork

Defined in: [src/index.ts:271](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L271)

Represents a UnitOfWork.  The UnitOfWork API is a wrapper around Salesforce's [Composite Graph API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_graph.htm).

## Methods

### registerCreate()

```ts
registerCreate(record): ReferenceId;
```

Defined in: [src/index.ts:279](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L279)

Registers a [RecordForCreate](../type-aliases/RecordForCreate.md) for the UnitOfWork and returns a [ReferenceId](ReferenceId.md) that
can be used to refer to the created record in subsequent operations in this UnitOfWork.

#### Parameters

##### record

[`RecordForCreate`](../type-aliases/RecordForCreate.md)

The record to create.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the created record.

***

### registerDelete()

```ts
registerDelete(type, id): ReferenceId;
```

Defined in: [src/index.ts:297](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L297)

Registers a deletion of an existing record of the given type and id.

#### Parameters

##### type

`string`

The object type of the record to delete.

##### id

`string`

The id of the record to delete.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the deleted record.

***

### registerUpdate()

```ts
registerUpdate(record): ReferenceId;
```

Defined in: [src/index.ts:288](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L288)

Registers a [RecordForUpdate](../type-aliases/RecordForUpdate.md) for the UnitOfWork and returns a [ReferenceId](ReferenceId.md) that can
be used to refer to the updated record in subsequent operations in this UnitOfWork.

#### Parameters

##### record

[`RecordForUpdate`](../type-aliases/RecordForUpdate.md)

The record to update.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the updated record.
