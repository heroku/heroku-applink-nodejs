[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / RecordForCreate

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

[src/index.ts:241](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L241)
