[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / ReferenceId

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

[src/index.ts:230](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L230)

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

[src/index.ts:222](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L222)
