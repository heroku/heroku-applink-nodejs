[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / DataTableBuilder

# Interface: DataTableBuilder

Defined in: [src/index.ts:957](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L957)

A builder object that helps with creating [DataTable](DataTable.md) instances.

## Methods

### addRow()

#### Call Signature

```ts
addRow(row): DataTableBuilder;
```

Defined in: [src/index.ts:966](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L966)

Adds a row of data to the [DataTable](DataTable.md) being constructed. This can be a
list of string values in the same order as the specified columns or a map of
column names to values. Values that do not match up to the specified columns
will be ignored.

##### Parameters

###### row

The row of data to add

`Map`\<`string`, `string`\> | `string`[]

##### Returns

`DataTableBuilder`

#### Call Signature

```ts
addRow<T>(value, fieldValueExtractor): any;
```

Defined in: [src/index.ts:976](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L976)

Adds a row of data to the [DataTable](DataTable.md) being constructed. A [DataTableFieldValueExtractor](../type-aliases/DataTableFieldValueExtractor.md)
is used to convert the arbitrary value into the required row format.

##### Type Parameters

###### T

`T`

the type of the object to extract row data from

##### Parameters

###### value

`T`

The object to extract row data from

###### fieldValueExtractor

[`DataTableFieldValueExtractor`](../type-aliases/DataTableFieldValueExtractor.md)\<`T`\>

A function that reads field values from the provided object. It will be called for each column that is included in the [DataTable](DataTable.md) being constructed.

##### Returns

`any`

***

### addRows()

#### Call Signature

```ts
addRows(rows): DataTableBuilder;
```

Defined in: [src/index.ts:986](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L986)

Adds multiple rows of data to the [DataTable](DataTable.md) being constructed. This can be a
list of string values in the same order as the specified columns or a map of
column names to values. Values that do not match up to the specified columns
will be ignored.

##### Parameters

###### rows

(`Map`\<`string`, `string`\> \| `string`[])[]

The list of rows of data to add

##### Returns

`DataTableBuilder`

#### Call Signature

```ts
addRows<T>(values, fieldValueExtractor): DataTableBuilder;
```

Defined in: [src/index.ts:996](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L996)

Adds multiple rows of data to the [DataTable](DataTable.md) being constructed. A [DataTableFieldValueExtractor](../type-aliases/DataTableFieldValueExtractor.md)
is used to convert the arbitrary values into the required row format.

##### Type Parameters

###### T

`T`

the type of the object to extract row data from

##### Parameters

###### values

`T`[]

The list of objects to extract row data from

###### fieldValueExtractor

[`DataTableFieldValueExtractor`](../type-aliases/DataTableFieldValueExtractor.md)\<`T`\>

A function that reads field values from each provided object in the list of values. It will be called for each column that is included in the [DataTable](DataTable.md) being constructed.

##### Returns

`DataTableBuilder`

***

### build()

```ts
build(): DataTable;
```

Defined in: [src/index.ts:1004](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L1004)

Creates a [DataTable](DataTable.md) instance from the columns and rows provided to the builder.

#### Returns

[`DataTable`](DataTable.md)
