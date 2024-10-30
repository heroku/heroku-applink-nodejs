[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / DataCloudApi

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

[src/index.ts:1108](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1108)

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

[src/index.ts:1114](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1114)

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

[src/index.ts:1122](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1122)
