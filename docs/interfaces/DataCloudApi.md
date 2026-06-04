[**@heroku/applink v1.1.1**](../README.md)

***

[@heroku/applink](../README.md) / DataCloudApi

# Interface: DataCloudApi

Defined in: [src/index.ts:1106](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L1106)

## Methods

### query()

```ts
query(sql): Promise<DataCloudQueryResponse>;
```

Defined in: [src/index.ts:1111](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L1111)

[Data Cloud Query API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_query_v2.htm)   *

#### Parameters

##### sql

[`DataCloudQuery`](DataCloudQuery.md)

#### Returns

`Promise`\<[`DataCloudQueryResponse`](DataCloudQueryResponse.md)\>

***

### queryNextBatch()

```ts
queryNextBatch(nextBatchId): Promise<DataCloudQueryResponse>;
```

Defined in: [src/index.ts:1117](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L1117)

[Data Cloud Query Next Batch API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_get_query_v2.htm)

#### Parameters

##### nextBatchId

`string`

#### Returns

`Promise`\<[`DataCloudQueryResponse`](DataCloudQueryResponse.md)\>

***

### upsert()

```ts
upsert(
   name, 
   objectName, 
data): Promise<DataCloudUpsertResponse>;
```

Defined in: [src/index.ts:1125](https://github.com/heroku/heroku-applink-nodejs/blob/0a00f88ed00150f9597362d83222d767a5ebdedd/src/index.ts#L1125)

[Insert Records API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_insert_records.htm)

#### Parameters

##### name

`string`

##### objectName

`string`

##### data

`any`

#### Returns

`Promise`\<[`DataCloudUpsertResponse`](DataCloudUpsertResponse.md)\>
