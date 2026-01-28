[**@heroku/applink v1.0.2-beta.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.2-beta.1](../README.md) / DataTableFieldValueExtractor

# Type Alias: DataTableFieldValueExtractor()\<T\>

```ts
type DataTableFieldValueExtractor<T>: (data, columnName) => string;
```

A transformation function that can be provided when calling [DataTableBuilder.addRow](../interfaces/DataTableBuilder.md#addrow) or
[DataTableBuilder.addRows](../interfaces/DataTableBuilder.md#addrows) on a [DataTableBuilder](../interfaces/DataTableBuilder.md) instance. It will
receive the value of an individual row and the name of the column to extract. This function
will be called for each column that is included in the data table.

## Type Parameters

• **T**

the type of the object to extract row data from

## Parameters

• **data**: `T`

• **columnName**: `string`

## Returns

`string`

## Defined in

[src/index.ts:949](https://github.com/heroku/heroku-applink-nodejs/blob/420cfe8c30aeef16e99ca3a0bc0c93186a9a0ac7/src/index.ts#L949)
