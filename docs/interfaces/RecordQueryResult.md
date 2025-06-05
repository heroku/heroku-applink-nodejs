[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / RecordQueryResult

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

[src/index.ts:174](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L174)

***

### nextRecordsUrl?

```ts
readonly optional nextRecordsUrl: string;
```

The URL for the next set of records, if any.

#### Defined in

[src/index.ts:177](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L177)

***

### records

```ts
readonly records: QueriedRecord[];
```

The records in this query result

#### Defined in

[src/index.ts:176](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L176)

***

### totalSize

```ts
readonly totalSize: number;
```

The total amount of records returned by the query.

#### Defined in

[src/index.ts:175](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L175)
