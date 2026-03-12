[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / RecordQueryResult

# Interface: RecordQueryResult

Defined in: [src/index.ts:173](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L173)

Represents the result of a record query.

## Properties

### done

```ts
readonly done: boolean;
```

Defined in: [src/index.ts:174](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L174)

If true, no additional records can be retrieved from the query result.
If false, one or more records remain to be retrieved.

***

### nextRecordsUrl?

```ts
readonly optional nextRecordsUrl: string;
```

Defined in: [src/index.ts:177](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L177)

The URL for the next set of records, if any.

***

### records

```ts
readonly records: QueriedRecord[];
```

Defined in: [src/index.ts:176](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L176)

The records in this query result

***

### totalSize

```ts
readonly totalSize: number;
```

Defined in: [src/index.ts:175](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L175)

The total amount of records returned by the query.
