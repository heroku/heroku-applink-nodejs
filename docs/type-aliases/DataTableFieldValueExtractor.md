[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / DataTableFieldValueExtractor

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

[src/index.ts:945](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L945)
