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

[src/index.ts:259](https://github.com/heroku/heroku-applink-nodejs/blob/81b4143bb39e9e9309a4571ee63197ea8b696d90/src/index.ts#L259)
