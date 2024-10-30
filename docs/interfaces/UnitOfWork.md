[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / UnitOfWork

# Interface: UnitOfWork

Represents a UnitOfWork.  The UnitOfWork API is a wrapper around Salesforce's [Composite Graph API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_graph.htm).

## Methods

### registerCreate()

```ts
registerCreate(record): ReferenceId
```

Registers a [RecordForCreate](../type-aliases/RecordForCreate.md) for the [UnitOfWork](UnitOfWork.md) and returns a [ReferenceId](ReferenceId.md) that
can be used to refer to the created record in subsequent operations in this UnitOfWork.

#### Parameters

• **record**: [`RecordForCreate`](../type-aliases/RecordForCreate.md)

The record to create.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the created record.

#### Defined in

[src/index.ts:275](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L275)

***

### registerDelete()

```ts
registerDelete(type, id): ReferenceId
```

Registers a deletion of an existing record of the given type and id.

#### Parameters

• **type**: `string`

The object type of the record to delete.

• **id**: `string`

The id of the record to delete.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the deleted record.

#### Defined in

[src/index.ts:293](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L293)

***

### registerUpdate()

```ts
registerUpdate(record): ReferenceId
```

Registers a [RecordForUpdate](../type-aliases/RecordForUpdate.md) for the [UnitOfWork](UnitOfWork.md) and returns a [ReferenceId](ReferenceId.md) that can
be used to refer to the updated record in subsequent operations in this UnitOfWork.

#### Parameters

• **record**: [`RecordForUpdate`](../type-aliases/RecordForUpdate.md)

The record to update.

#### Returns

[`ReferenceId`](ReferenceId.md)

The ReferenceId for the updated record.

#### Defined in

[src/index.ts:284](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L284)
