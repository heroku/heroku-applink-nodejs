[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / RecordForCreate

# Type Alias: RecordForCreate

```ts
type RecordForCreate = object;
```

Defined in: [src/index.ts:245](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L245)

Creates a single record for create or registers a record creation for the [UnitOfWork](../interfaces/UnitOfWork.md)
and returns a [ReferenceId](../interfaces/ReferenceId.md).

## Properties

### binaryFields?

```ts
optional binaryFields: object;
```

Defined in: [src/index.ts:248](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L248)

An optional JavaScript Object with unencoded binary content buffers to create the record with. Values will be automatically base64 encoded.
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

Defined in: [src/index.ts:247](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L247)

A JavaScript Object for the fields that the record will be created with.

#### Index Signature

```ts
[key: string]: unknown
```

***

### type

```ts
type: string;
```

Defined in: [src/index.ts:246](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L246)

The Salesforce Object type
