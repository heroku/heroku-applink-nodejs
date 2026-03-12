[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / Record

# Type Alias: Record

```ts
type Record = object;
```

Defined in: [src/index.ts:188](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L188)

The base record type representing an SObject

## Properties

### binaryFields?

```ts
readonly optional binaryFields: object;
```

Defined in: [src/index.ts:191](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L191)

An optional JavaScript object with any eagerly-loaded base64 decoded binary content.
Each key in fields and binaryFields is case insensitive; the getters and setters for each
key/value pair will ignore casing when getting and setting fields.

#### Index Signature

```ts
[key: string]: Buffer
```

***

### fields

```ts
readonly fields: object;
```

Defined in: [src/index.ts:190](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L190)

A JavaScript object with all fields from the returned records.

#### Index Signature

```ts
[key: string]: unknown
```

***

### type

```ts
readonly type: string;
```

Defined in: [src/index.ts:189](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L189)

The Salesforce Object type
