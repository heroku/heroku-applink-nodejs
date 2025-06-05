[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / RecordForUpdate

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

[src/index.ts:259](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L259)
