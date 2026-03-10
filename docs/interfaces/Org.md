[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / Org

# Interface: Org

Defined in: [src/index.ts:153](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L153)

Holds information about the invoking Salesforce organization and user.

## Properties

### apiVersion

```ts
readonly apiVersion: string;
```

Defined in: [src/index.ts:154](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L154)

The API version the Salesforce organization is currently using.

***

### dataApi

```ts
readonly dataApi: DataApi;
```

Defined in: [src/index.ts:155](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L155)

An initialized data API client instance.

***

### dataCloudApi?

```ts
readonly optional dataCloudApi: DataCloudApi;
```

Defined in: [src/index.ts:156](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L156)

If instance URL and token are provide, an initialized Data Cloud data API client instance.

***

### domainUrl

```ts
readonly domainUrl: string;
```

Defined in: [src/index.ts:157](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L157)

The domain URL of the Salesforce organization.

***

### id

```ts
readonly id: string;
```

Defined in: [src/index.ts:158](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L158)

The Salesforce organization ID.

***

### namespace

```ts
readonly namespace: string;
```

Defined in: [src/index.ts:159](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L159)

***

### user

```ts
readonly user: User;
```

Defined in: [src/index.ts:160](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L160)

The currently logged in user

## Methods

### request()

```ts
request(
   fullUrlOrUrlPart, 
   opts, 
   json): any;
```

Defined in: [src/index.ts:162](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L162)

#### Parameters

##### fullUrlOrUrlPart

`string`

##### opts

`any`

##### json

`boolean`

#### Returns

`any`
