[**@heroku/applink v1.0.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2](../README.md) / RecordForCreate

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

[src/index.ts:245](https://github.com/heroku/heroku-applink-nodejs/blob/e24fc5b14590f051e3220a92b49b8c88ab5f4be6/src/index.ts#L245)
