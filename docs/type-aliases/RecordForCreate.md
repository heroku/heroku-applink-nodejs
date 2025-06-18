[**@heroku/applink v1.0.0-ea.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.2](../README.md) / RecordForCreate

# Type Alias: RecordForCreate

```ts
type RecordForCreate: object;
```

Creates a single record for create or registers a record creation for the [UnitOfWork](../interfaces/UnitOfWork.md)
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

### type

```ts
type: string;
```

## Defined in

[src/index.ts:245](https://github.com/heroku/heroku-applink-nodejs/blob/3fb51da43e4d04227af35a3ae6f0781c0baa825b/src/index.ts#L245)
