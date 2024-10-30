[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / RecordQueryResult

# Interface: RecordQueryResult

Represents the result of a record query.

## Properties

### done

```ts
readonly done: boolean;
```

If true, no additional records can be retrieved from the query result.
If false, one or more records remain to be retrieved.

#### Defined in

[src/index.ts:170](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L170)

***

### nextRecordsUrl?

```ts
readonly optional nextRecordsUrl: string;
```

The URL for the next set of records, if any.

#### Defined in

[src/index.ts:173](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L173)

***

### records

```ts
readonly records: QueriedRecord[];
```

The records in this query result

#### Defined in

[src/index.ts:172](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L172)

***

### totalSize

```ts
readonly totalSize: number;
```

The total amount of records returned by the query.

#### Defined in

[src/index.ts:171](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L171)
