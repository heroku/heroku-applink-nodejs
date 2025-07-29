[**@heroku/applink v1.0.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0](../README.md) / ReferenceId

# Interface: ReferenceId

References a modification, creation, or deletion of an object that may
occur as a part of a UnitOfWork.

## Methods

### toApiString()

```ts
toApiString(): string
```

Get a reference to a record's ID that may be created, deleted, or modified
as part of a UnitOfWork.

#### Returns

`string`

A string reference to a record id

#### Defined in

[src/index.ts:234](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L234)

***

### toString()

```ts
toString(): string
```

Get a reference to a record modification, creation, or deletion that may
occur as a part of a UnitOfWork.

#### Returns

`string`

A string identifier

#### Defined in

[src/index.ts:226](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L226)
