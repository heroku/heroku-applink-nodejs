[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / ReferenceId

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

[src/index.ts:234](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L234)

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

[src/index.ts:226](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L226)
