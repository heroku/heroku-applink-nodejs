[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / DataTableBuilder

# Interface: DataTableBuilder

A builder object that helps with creating [DataTable](DataTable.md) instances.

## Methods

### addRow()

#### addRow(row)

```ts
addRow(row): DataTableBuilder
```

Adds a row of data to the [DataTable](DataTable.md) being constructed. This can be a
list of string values in the same order as the specified columns or a map of
column names to values. Values that do not match up to the specified columns
will be ignored.

##### Parameters

• **row**: `string`[] \| `Map`\<`string`, `string`\>

The row of data to add

##### Returns

[`DataTableBuilder`](DataTableBuilder.md)

##### Defined in

[src/index.ts:962](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L962)

#### addRow(value, fieldValueExtractor)

```ts
addRow<T>(value, fieldValueExtractor): any
```

Adds a row of data to the [DataTable](DataTable.md) being constructed. A [DataTableFieldValueExtractor](../type-aliases/DataTableFieldValueExtractor.md)
is used to convert the arbitrary value into the required row format.

##### Type Parameters

• **T**

the type of the object to extract row data from

##### Parameters

• **value**: `T`

The object to extract row data from

• **fieldValueExtractor**: [`DataTableFieldValueExtractor`](../type-aliases/DataTableFieldValueExtractor.md)\<`T`\>

A function that reads field values from the provided object. It will be called for each column that is included in the [DataTable](DataTable.md) being constructed.

##### Returns

`any`

##### Defined in

[src/index.ts:972](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L972)

***

### addRows()

#### addRows(rows)

```ts
addRows(rows): DataTableBuilder
```

Adds multiple rows of data to the [DataTable](DataTable.md) being constructed. This can be a
list of string values in the same order as the specified columns or a map of
column names to values. Values that do not match up to the specified columns
will be ignored.

##### Parameters

• **rows**: (`string`[] \| `Map`\<`string`, `string`\>)[]

The list of rows of data to add

##### Returns

[`DataTableBuilder`](DataTableBuilder.md)

##### Defined in

[src/index.ts:982](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L982)

#### addRows(values, fieldValueExtractor)

```ts
addRows<T>(values, fieldValueExtractor): DataTableBuilder
```

Adds multiple rows of data to the [DataTable](DataTable.md) being constructed. A [DataTableFieldValueExtractor](../type-aliases/DataTableFieldValueExtractor.md)
is used to convert the arbitrary values into the required row format.

##### Type Parameters

• **T**

the type of the object to extract row data from

##### Parameters

• **values**: `T`[]

The list of objects to extract row data from

• **fieldValueExtractor**: [`DataTableFieldValueExtractor`](../type-aliases/DataTableFieldValueExtractor.md)\<`T`\>

A function that reads field values from each provided object in the list of values. It will be called for each column that is included in the [DataTable](DataTable.md) being constructed.

##### Returns

[`DataTableBuilder`](DataTableBuilder.md)

##### Defined in

[src/index.ts:992](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L992)

***

### build()

```ts
build(): DataTable
```

Creates a [DataTable](DataTable.md) instance from the columns and rows provided to the builder.

#### Returns

[`DataTable`](DataTable.md)

#### Defined in

[src/index.ts:1000](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L1000)
