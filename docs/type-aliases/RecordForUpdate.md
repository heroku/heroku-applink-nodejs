[**@heroku/applink v1.0.0-ea.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.2](../README.md) / RecordForUpdate

# Type Alias: RecordForUpdate

```ts
type RecordForUpdate: object;
```

Creates a single record for update or registers a record update for the [UnitOfWork](../interfaces/UnitOfWork.md)
and returns a [ReferenceId](../interfaces/ReferenceId.md).

## Type declaration

### binaryFields?

```ts
optional binaryFields: object;
```

#### Index Signature

 \[`key`: `string`\]: `Buffer`

### fields

```ts
fields: object;
```

#### Index Signature

 \[`key`: `string`\]: `unknown`

### fields.id

```ts
id: string;
```

### type

```ts
type: string;
```

## Defined in

[src/index.ts:259](https://github.com/heroku/heroku-applink-nodejs/blob/3fb51da43e4d04227af35a3ae6f0781c0baa825b/src/index.ts#L259)
