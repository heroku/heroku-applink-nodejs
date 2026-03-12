[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / ReferenceId

# Interface: ReferenceId

Defined in: [src/index.ts:219](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L219)

References a modification, creation, or deletion of an object that may
occur as a part of a UnitOfWork.

## Methods

### toApiString()

```ts
toApiString(): string;
```

Defined in: [src/index.ts:234](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L234)

Get a reference to a record's ID that may be created, deleted, or modified
as part of a UnitOfWork.

#### Returns

`string`

A string reference to a record id

***

### toString()

```ts
toString(): string;
```

Defined in: [src/index.ts:226](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L226)

Get a reference to a record modification, creation, or deletion that may
occur as a part of a UnitOfWork.

#### Returns

`string`

A string identifier
