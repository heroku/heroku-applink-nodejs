[**@heroku/applink v1.0.2-beta.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2-beta.1](../README.md) / ReferenceId

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

[src/index.ts:234](https://github.com/heroku/heroku-applink-nodejs/blob/420cfe8c30aeef16e99ca3a0bc0c93186a9a0ac7/src/index.ts#L234)

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

[src/index.ts:226](https://github.com/heroku/heroku-applink-nodejs/blob/420cfe8c30aeef16e99ca3a0bc0c93186a9a0ac7/src/index.ts#L226)
