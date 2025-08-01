[**@heroku/applink v1.0.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0](../README.md) / Org

# Interface: Org

Holds information about the invoking Salesforce organization and user.

## Properties

### apiVersion

```ts
readonly apiVersion: string;
```

The API version the Salesforce organization is currently using.

#### Defined in

[src/index.ts:154](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L154)

***

### dataApi

```ts
readonly dataApi: DataApi;
```

An initialized data API client instance.

#### Defined in

[src/index.ts:155](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L155)

***

### dataCloudApi?

```ts
readonly optional dataCloudApi: DataCloudApi;
```

If instance URL and token are provide, an initialized Data Cloud data API client instance.

#### Defined in

[src/index.ts:156](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L156)

***

### domainUrl

```ts
readonly domainUrl: string;
```

The domain URL of the Salesforce organization.

#### Defined in

[src/index.ts:157](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L157)

***

### id

```ts
readonly id: string;
```

The Salesforce organization ID.

#### Defined in

[src/index.ts:158](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L158)

***

### namespace

```ts
readonly namespace: string;
```

#### Defined in

[src/index.ts:159](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L159)

***

### user

```ts
readonly user: User;
```

The currently logged in user

#### Defined in

[src/index.ts:160](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L160)

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

[src/index.ts:162](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L162)
