[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / Org

# Interface: Org

Holds information about the invoking Salesforce organization and user.

## Properties

### apiVersion

```ts
readonly apiVersion: string;
```

The API version the Salesforce organization is currently using.

#### Defined in

[src/index.ts:150](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L150)

***

### dataApi

```ts
readonly dataApi: DataApi;
```

An initialized data API client instance.

#### Defined in

[src/index.ts:151](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L151)

***

### dataCloudApi?

```ts
readonly optional dataCloudApi: DataCloudApi;
```

If instance URL and token are provide, an initialized Data Cloud data API client instance.

#### Defined in

[src/index.ts:152](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L152)

***

### domainUrl

```ts
readonly domainUrl: string;
```

The domain URL of the Salesforce organization.

#### Defined in

[src/index.ts:153](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L153)

***

### id

```ts
readonly id: string;
```

The Salesforce organization ID.

#### Defined in

[src/index.ts:154](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L154)

***

### namespace

```ts
readonly namespace: string;
```

#### Defined in

[src/index.ts:155](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L155)

***

### user

```ts
readonly user: User;
```

The currently logged in user

#### Defined in

[src/index.ts:156](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L156)

## Methods

### request()

```ts
request(
   fullUrlOrUrlPart, 
   opts, 
   json): any
```

#### Parameters

• **fullUrlOrUrlPart**: `string`

• **opts**: `any`

• **json**: `boolean`

#### Returns

`any`

#### Defined in

[src/index.ts:158](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L158)
