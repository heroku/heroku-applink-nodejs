[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / RecordForUpdate

# Type Alias: RecordForUpdate

```ts
type RecordForUpdate = object;
```

Defined in: [src/index.ts:259](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L259)

Creates a single record for update or registers a record update for the [UnitOfWork](../interfaces/UnitOfWork.md)
and returns a [ReferenceId](../interfaces/ReferenceId.md).

## Properties

### binaryFields?

```ts
optional binaryFields: object;
```

Defined in: [src/index.ts:265](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L265)

An optional JavaScript Object with unencoded binary content buffers to update the record with. Values will be automatically base64 encoded.
The keys in fields and binaryFields are case insensitive.

#### Index Signature

```ts
[key: string]: Buffer
```

***

### fields

```ts
fields: object;
```

Defined in: [src/index.ts:261](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L261)

A JavaScript Object for the fields that the record will be updated with.

#### Index Signature

```ts
[key: string]: unknown
```

#### id

```ts
id: string;
```

***

### type

```ts
type: string;
```

Defined in: [src/index.ts:260](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L260)

The Salesforce Object type
