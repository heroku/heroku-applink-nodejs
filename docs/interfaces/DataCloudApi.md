[**@heroku/applink v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea](../README.md) / DataCloudApi

# Interface: DataCloudApi

## Methods

### query()

```ts
query(sql): Promise<DataCloudQueryResponse>
```

[Data Cloud Query API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_query_v2.htm)   *

#### Parameters

• **sql**: [`DataCloudQuery`](DataCloudQuery.md)

#### Returns

`Promise`\<[`DataCloudQueryResponse`](DataCloudQueryResponse.md)\>

#### Defined in

[src/index.ts:1111](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L1111)

***

### queryNextBatch()

```ts
queryNextBatch(nextBatchId): Promise<DataCloudQueryResponse>
```

[Data Cloud Query Next Batch API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_get_query_v2.htm)

#### Parameters

• **nextBatchId**: `string`

#### Returns

`Promise`\<[`DataCloudQueryResponse`](DataCloudQueryResponse.md)\>

#### Defined in

[src/index.ts:1117](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L1117)

***

### upsert()

```ts
upsert(
   name, 
   objectName, 
data): Promise<DataCloudUpsertResponse>
```

[Insert Records API](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_insert_records.htm)

#### Parameters

• **name**: `string`

• **objectName**: `string`

• **data**: `any`

#### Returns

`Promise`\<[`DataCloudUpsertResponse`](DataCloudUpsertResponse.md)\>

#### Defined in

[src/index.ts:1125](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L1125)
