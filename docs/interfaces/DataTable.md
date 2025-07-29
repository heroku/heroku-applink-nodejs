[**@heroku/applink v1.0.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0](../README.md) / DataTable

# Interface: DataTable

Represents a CSV-like data table consisting of columns and rows. All the values
contained must be represented as strings.

## Extends

- `Array`\<`Map`\<`string`, `string`\>\>

## Properties

### \[unscopables\]

```ts
readonly [unscopables]: object;
```

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### \[unscopables\]?

```ts
readonly optional [unscopables]: boolean;
```

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### length?

```ts
optional length: boolean;
```

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### \[iterator\]?

```ts
optional [iterator];
```

#### at?

```ts
optional at;
```

#### concat?

```ts
optional concat;
```

#### copyWithin?

```ts
optional copyWithin;
```

#### entries?

```ts
optional entries;
```

#### every?

```ts
optional every;
```

#### fill?

```ts
optional fill;
```

#### filter?

```ts
optional filter;
```

#### find?

```ts
optional find;
```

#### findIndex?

```ts
optional findIndex;
```

#### flat?

```ts
optional flat;
```

#### flatMap?

```ts
optional flatMap;
```

#### forEach?

```ts
optional forEach;
```

#### includes?

```ts
optional includes;
```

#### indexOf?

```ts
optional indexOf;
```

#### join?

```ts
optional join;
```

#### keys?

```ts
optional keys;
```

#### lastIndexOf?

```ts
optional lastIndexOf;
```

#### map?

```ts
optional map;
```

#### pop?

```ts
optional pop;
```

#### push?

```ts
optional push;
```

#### reduce?

```ts
optional reduce;
```

#### reduceRight?

```ts
optional reduceRight;
```

#### reverse?

```ts
optional reverse;
```

#### shift?

```ts
optional shift;
```

#### slice?

```ts
optional slice;
```

#### some?

```ts
optional some;
```

#### sort?

```ts
optional sort;
```

#### splice?

```ts
optional splice;
```

#### toLocaleString?

```ts
optional toLocaleString;
```

#### toString?

```ts
optional toString;
```

#### unshift?

```ts
optional unshift;
```

#### values?

```ts
optional values;
```

#### Inherited from

`Array.[unscopables]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

***

### columns

```ts
columns: [string, ...string[]];
```

A list of one or more column names contained in this data table.

#### Defined in

[src/index.ts:938](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L938)

***

### length

```ts
length: number;
```

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

`Array.length`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1326

## Methods

### \[iterator\]()

```ts
iterator: ArrayIterator<Map<string, string>>
```

Iterator

#### Returns

`ArrayIterator`\<`Map`\<`string`, `string`\>\>

#### Inherited from

`Array.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

***

### at()

```ts
at(index): Map<string, string>
```

#### Parameters

• **index**: `number`

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

`Array.at`

#### Defined in

node\_modules/@types/node/compatibility/indexable.d.ts:4

***

### concat()

#### concat(items)

```ts
concat(...items): Map<string, string>[]
```

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: `ConcatArray`\<`Map`\<`string`, `string`\>\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

`Array.concat`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1350

#### concat(items)

```ts
concat(...items): Map<string, string>[]
```

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: (`Map`\<`string`, `string`\> \| `ConcatArray`\<`Map`\<`string`, `string`\>\>)[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

`Array.concat`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1356

***

### copyWithin()

```ts
copyWithin(
   target, 
   start, 
   end?): this
```

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

• **target**: `number`

If target is negative, it is treated as length+target where length is the
length of the array.

• **start**: `number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

• **end?**: `number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Array.copyWithin`

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:62

***

### entries()

```ts
entries(): ArrayIterator<[number, Map<string, string>]>
```

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<[`number`, `Map`\<`string`, `string`\>]\>

#### Inherited from

`Array.entries`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

***

### every()

#### every(predicate, thisArg)

```ts
every<S>(predicate, thisArg?): this is S[]
```

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

• **S** *extends* `Map`\<`string`, `string`\>

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is S[]`

##### Inherited from

`Array.every`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1433

#### every(predicate, thisArg)

```ts
every(predicate, thisArg?): boolean
```

Determines whether all the members of an array satisfy the specified test.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`Array.every`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1442

***

### fill()

```ts
fill(
   value, 
   start?, 
   end?): this
```

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

• **value**: `Map`\<`string`, `string`\>

value to fill array section with

• **start?**: `number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

• **end?**: `number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

`Array.fill`

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:51

***

### filter()

#### filter(predicate, thisArg)

```ts
filter<S>(predicate, thisArg?): S[]
```

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

• **S** *extends* `Map`\<`string`, `string`\>

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`Array.filter`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1469

#### filter(predicate, thisArg)

```ts
filter(predicate, thisArg?): Map<string, string>[]
```

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

`Array.filter`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1475

***

### find()

#### find(predicate, thisArg)

```ts
find<S>(predicate, thisArg?): S
```

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S** *extends* `Map`\<`string`, `string`\>

##### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`S`

##### Inherited from

`Array.find`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:29

#### find(predicate, thisArg)

```ts
find(predicate, thisArg?): Map<string, string>
```

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

`Array.find`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:30

***

### findIndex()

```ts
findIndex(predicate, thisArg?): number
```

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Array.findIndex`

#### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:41

***

### flat()

```ts
flat<A, D>(this, depth?): FlatArray<A, D>[]
```

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

• **A**

• **D** *extends* `number` = `1`

#### Parameters

• **this**: `A`

• **depth?**: `D`

The maximum recursion depth

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

`Array.flat`

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:75

***

### flatMap()

```ts
flatMap<U, This>(callback, thisArg?): U[]
```

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

• **U**

• **This** = `undefined`

#### Parameters

• **callback**

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

• **thisArg?**: `This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`Array.flatMap`

#### Defined in

node\_modules/typescript/lib/lib.es2019.array.d.ts:64

***

### forEach()

```ts
forEach(callbackfn, thisArg?): void
```

Performs the specified action for each element in an array.

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`Array.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1457

***

### includes()

```ts
includes(searchElement, fromIndex?): boolean
```

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

• **searchElement**: `Map`\<`string`, `string`\>

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Array.includes`

#### Defined in

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

***

### indexOf()

```ts
indexOf(searchElement, fromIndex?): number
```

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: `Map`\<`string`, `string`\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`Array.indexOf`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1418

***

### join()

```ts
join(separator?): string
```

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

• **separator?**: `string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Array.join`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1361

***

### keys()

```ts
keys(): ArrayIterator<number>
```

Returns an iterable of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Array.keys`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

***

### lastIndexOf()

```ts
lastIndexOf(searchElement, fromIndex?): number
```

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: `Map`\<`string`, `string`\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`Array.lastIndexOf`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1424

***

### map()

```ts
map<U>(callbackfn, thisArg?): U[]
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

• **U**

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`Array.map`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1463

***

### pop()

```ts
pop(): Map<string, string>
```

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

`Array.pop`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1339

***

### push()

```ts
push(...items): number
```

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

• ...**items**: `Map`\<`string`, `string`\>[]

New elements to add to the array.

#### Returns

`number`

#### Inherited from

`Array.push`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1344

***

### reduce()

#### reduce(callbackfn)

```ts
reduce(callbackfn): Map<string, string>
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

`Array.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1481

#### reduce(callbackfn, initialValue)

```ts
reduce(callbackfn, initialValue): Map<string, string>
```

##### Parameters

• **callbackfn**

• **initialValue**: `Map`\<`string`, `string`\>

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

`Array.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1482

#### reduce(callbackfn, initialValue)

```ts
reduce<U>(callbackfn, initialValue): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduce`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1488

***

### reduceRight()

#### reduceRight(callbackfn)

```ts
reduceRight(callbackfn): Map<string, string>
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

`Array.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1494

#### reduceRight(callbackfn, initialValue)

```ts
reduceRight(callbackfn, initialValue): Map<string, string>
```

##### Parameters

• **callbackfn**

• **initialValue**: `Map`\<`string`, `string`\>

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

`Array.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1495

#### reduceRight(callbackfn, initialValue)

```ts
reduceRight<U>(callbackfn, initialValue): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduceRight`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1501

***

### reverse()

```ts
reverse(): Map<string, string>[]
```

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`Map`\<`string`, `string`\>[]

#### Inherited from

`Array.reverse`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1366

***

### shift()

```ts
shift(): Map<string, string>
```

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

`Array.shift`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1371

***

### slice()

```ts
slice(start?, end?): Map<string, string>[]
```

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

• **start?**: `number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

• **end?**: `number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

#### Returns

`Map`\<`string`, `string`\>[]

#### Inherited from

`Array.slice`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1381

***

### some()

```ts
some(predicate, thisArg?): boolean
```

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

• **predicate**

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Array.some`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1451

***

### sort()

```ts
sort(compareFn?): this
```

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

• **compareFn?**

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

`Array.sort`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1392

***

### splice()

#### splice(start, deleteCount)

```ts
splice(start, deleteCount?): Map<string, string>[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount?**: `number`

The number of elements to remove.

##### Returns

`Map`\<`string`, `string`\>[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1399

#### splice(start, deleteCount, items)

```ts
splice(
   start, 
   deleteCount, ...
   items): Map<string, string>[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount**: `number`

The number of elements to remove.

• ...**items**: `Map`\<`string`, `string`\>[]

Elements to insert into the array in place of the deleted elements.

##### Returns

`Map`\<`string`, `string`\>[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1407

***

### toLocaleString()

#### toLocaleString()

```ts
toLocaleString(): string
```

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

##### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1334

#### toLocaleString(locales, options)

```ts
toLocaleString(locales, options?): string
```

##### Parameters

• **locales**: `string` \| `string`[]

• **options?**: `NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

##### Defined in

node\_modules/typescript/lib/lib.es2015.core.d.ts:64

***

### toString()

```ts
toString(): string
```

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Array.toString`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1330

***

### unshift()

```ts
unshift(...items): number
```

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

• ...**items**: `Map`\<`string`, `string`\>[]

Elements to insert at the start of the array.

#### Returns

`number`

#### Inherited from

`Array.unshift`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1412

***

### values()

```ts
values(): ArrayIterator<Map<string, string>>
```

Returns an iterable of values in the array

#### Returns

`ArrayIterator`\<`Map`\<`string`, `string`\>\>

#### Inherited from

`Array.values`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93
