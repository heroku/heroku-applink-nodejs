[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / DataTable

# Interface: DataTable

Defined in: [src/index.ts:934](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L934)

Represents a CSV-like data table consisting of columns and rows. All the values
contained must be represented as strings.

## Extends

- `Array`\<`Map`\<`string`, `string`\>\>

## Indexable

```ts
[n: number]: Map<string, string>
```

## Properties

### \[unscopables\]

```ts
readonly [unscopables]: object;
```

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Index Signature

```ts
[key: number]: boolean
```

#### \[iterator\]?

```ts
optional [iterator]: boolean;
```

#### \[unscopables\]?

```ts
readonly optional [unscopables]: boolean;
```

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### at?

```ts
optional at: boolean;
```

#### concat?

```ts
optional concat: boolean;
```

#### copyWithin?

```ts
optional copyWithin: boolean;
```

#### entries?

```ts
optional entries: boolean;
```

#### every?

```ts
optional every: boolean;
```

#### fill?

```ts
optional fill: boolean;
```

#### filter?

```ts
optional filter: boolean;
```

#### find?

```ts
optional find: boolean;
```

#### findIndex?

```ts
optional findIndex: boolean;
```

#### flat?

```ts
optional flat: boolean;
```

#### flatMap?

```ts
optional flatMap: boolean;
```

#### forEach?

```ts
optional forEach: boolean;
```

#### includes?

```ts
optional includes: boolean;
```

#### indexOf?

```ts
optional indexOf: boolean;
```

#### join?

```ts
optional join: boolean;
```

#### keys?

```ts
optional keys: boolean;
```

#### lastIndexOf?

```ts
optional lastIndexOf: boolean;
```

#### length?

```ts
optional length: boolean;
```

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### map?

```ts
optional map: boolean;
```

#### pop?

```ts
optional pop: boolean;
```

#### push?

```ts
optional push: boolean;
```

#### reduce?

```ts
optional reduce: boolean;
```

#### reduceRight?

```ts
optional reduceRight: boolean;
```

#### reverse?

```ts
optional reverse: boolean;
```

#### shift?

```ts
optional shift: boolean;
```

#### slice?

```ts
optional slice: boolean;
```

#### some?

```ts
optional some: boolean;
```

#### sort?

```ts
optional sort: boolean;
```

#### splice?

```ts
optional splice: boolean;
```

#### toLocaleString?

```ts
optional toLocaleString: boolean;
```

#### toString?

```ts
optional toString: boolean;
```

#### unshift?

```ts
optional unshift: boolean;
```

#### values?

```ts
optional values: boolean;
```

#### Inherited from

```ts
Array.[unscopables]
```

***

### columns

```ts
columns: [string, ...string[]];
```

Defined in: [src/index.ts:938](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L938)

A list of one or more column names contained in this data table.

***

### length

```ts
length: number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1326

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

```ts
Array.length
```

## Methods

### \[iterator\]()

```ts
iterator: ArrayIterator<Map<string, string>>;
```

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

Iterator

#### Returns

`ArrayIterator`\<`Map`\<`string`, `string`\>\>

#### Inherited from

```ts
Array.[iterator]
```

***

### at()

```ts
at(index): Map<string, string>;
```

Defined in: node\_modules/@types/node/compatibility/indexable.d.ts:4

#### Parameters

##### index

`number`

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

```ts
Array.at
```

***

### concat()

#### Call Signature

```ts
concat(...items): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1350

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...`ConcatArray`\<`Map`\<`string`, `string`\>\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

```ts
Array.concat
```

#### Call Signature

```ts
concat(...items): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1356

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...(
  \| `Map`\<`string`, `string`\>
  \| `ConcatArray`\<`Map`\<`string`, `string`\>\>)[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

```ts
Array.concat
```

***

### copyWithin()

```ts
copyWithin(
   target, 
   start, 
   end?): this;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:62

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

##### target

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

##### start

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

##### end?

`number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

```ts
Array.copyWithin
```

***

### entries()

```ts
entries(): ArrayIterator<[number, Map<string, string>]>;
```

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, `Map`\<`string`, `string`\>\]\>

#### Inherited from

```ts
Array.entries
```

***

### every()

#### Call Signature

```ts
every<S>(predicate, thisArg?): this is S[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1433

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

###### S

`S` *extends* `Map`\<`string`, `string`\>

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is S[]`

##### Inherited from

```ts
Array.every
```

#### Call Signature

```ts
every(predicate, thisArg?): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1442

Determines whether all the members of an array satisfy the specified test.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

```ts
Array.every
```

***

### fill()

```ts
fill(
   value, 
   start?, 
   end?): this;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:51

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

##### value

`Map`

value to fill array section with

##### start?

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

##### end?

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

```ts
Array.fill
```

***

### filter()

#### Call Signature

```ts
filter<S>(predicate, thisArg?): S[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1469

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

###### S

`S` *extends* `Map`\<`string`, `string`\>

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

```ts
Array.filter
```

#### Call Signature

```ts
filter(predicate, thisArg?): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1475

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`Map`\<`string`, `string`\>[]

##### Inherited from

```ts
Array.filter
```

***

### find()

#### Call Signature

```ts
find<S>(predicate, thisArg?): S;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:29

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

###### S

`S` *extends* `Map`\<`string`, `string`\>

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`S`

##### Inherited from

```ts
Array.find
```

#### Call Signature

```ts
find(predicate, thisArg?): Map<string, string>;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:30

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

##### Returns

`Map`\<`string`, `string`\>

##### Inherited from

```ts
Array.find
```

***

### findIndex()

```ts
findIndex(predicate, thisArg?): number;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:41

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

```ts
Array.findIndex
```

***

### flat()

```ts
flat<A, D>(this, depth?): FlatArray<A, D>[];
```

Defined in: node\_modules/typescript/lib/lib.es2019.array.d.ts:75

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

##### A

`A`

##### D

`D` *extends* `number` = `1`

#### Parameters

##### this

`A`

##### depth?

`D`

The maximum recursion depth

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

```ts
Array.flat
```

***

### flatMap()

```ts
flatMap<U, This>(callback, thisArg?): U[];
```

Defined in: node\_modules/typescript/lib/lib.es2019.array.d.ts:64

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

##### U

`U`

##### This

`This` = `undefined`

#### Parameters

##### callback

(`this`, `value`, `index`, `array`) => `U` \| readonly `U`[]

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

##### thisArg?

`This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

```ts
Array.flatMap
```

***

### forEach()

```ts
forEach(callbackfn, thisArg?): void;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1457

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

```ts
Array.forEach
```

***

### includes()

```ts
includes(searchElement, fromIndex?): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`Map`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

```ts
Array.includes
```

***

### indexOf()

```ts
indexOf(searchElement, fromIndex?): number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1418

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

##### searchElement

`Map`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

```ts
Array.indexOf
```

***

### join()

```ts
join(separator?): string;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1361

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

```ts
Array.join
```

***

### keys()

```ts
keys(): ArrayIterator<number>;
```

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

Returns an iterable of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

```ts
Array.keys
```

***

### lastIndexOf()

```ts
lastIndexOf(searchElement, fromIndex?): number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1424

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

##### searchElement

`Map`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

```ts
Array.lastIndexOf
```

***

### map()

```ts
map<U>(callbackfn, thisArg?): U[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1463

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

##### U

`U`

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

```ts
Array.map
```

***

### pop()

```ts
pop(): Map<string, string>;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1339

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

```ts
Array.pop
```

***

### push()

```ts
push(...items): number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1344

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

##### items

...`Map`\<`string`, `string`\>[]

New elements to add to the array.

#### Returns

`number`

#### Inherited from

```ts
Array.push
```

***

### reduce()

#### Call Signature

```ts
reduce(callbackfn): Map;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1481

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `Map`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`Map`

##### Inherited from

```ts
Array.reduce
```

#### Call Signature

```ts
reduce(callbackfn, initialValue): Map;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1482

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `Map`

###### initialValue

`Map`

##### Returns

`Map`

##### Inherited from

```ts
Array.reduce
```

#### Call Signature

```ts
reduce<U>(callbackfn, initialValue): U;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1488

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

```ts
Array.reduce
```

***

### reduceRight()

#### Call Signature

```ts
reduceRight(callbackfn): Map;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1494

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `Map`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`Map`

##### Inherited from

```ts
Array.reduceRight
```

#### Call Signature

```ts
reduceRight(callbackfn, initialValue): Map;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1495

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `Map`

###### initialValue

`Map`

##### Returns

`Map`

##### Inherited from

```ts
Array.reduceRight
```

#### Call Signature

```ts
reduceRight<U>(callbackfn, initialValue): U;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1501

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

```ts
Array.reduceRight
```

***

### reverse()

```ts
reverse(): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1366

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`Map`\<`string`, `string`\>[]

#### Inherited from

```ts
Array.reverse
```

***

### shift()

```ts
shift(): Map<string, string>;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1371

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`Map`\<`string`, `string`\>

#### Inherited from

```ts
Array.shift
```

***

### slice()

```ts
slice(start?, end?): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1381

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

##### start?

`number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

##### end?

`number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

#### Returns

`Map`\<`string`, `string`\>[]

#### Inherited from

```ts
Array.slice
```

***

### some()

```ts
some(predicate, thisArg?): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1451

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

```ts
Array.some
```

***

### sort()

```ts
sort(compareFn?): this;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1392

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

```ts
Array.sort
```

***

### splice()

#### Call Signature

```ts
splice(start, deleteCount?): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1399

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove.

##### Returns

`Map`\<`string`, `string`\>[]

An array containing the elements that were deleted.

##### Inherited from

```ts
Array.splice
```

#### Call Signature

```ts
splice(
   start, 
   deleteCount, ...
   items): Map<string, string>[];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1407

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove.

###### items

...`Map`\<`string`, `string`\>[]

Elements to insert into the array in place of the deleted elements.

##### Returns

`Map`\<`string`, `string`\>[]

An array containing the elements that were deleted.

##### Inherited from

```ts
Array.splice
```

***

### toLocaleString()

#### Call Signature

```ts
toLocaleString(): string;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1334

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

```ts
Array.toLocaleString
```

#### Call Signature

```ts
toLocaleString(locales, options?): string;
```

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:64

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

```ts
Array.toLocaleString
```

***

### toString()

```ts
toString(): string;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1330

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

```ts
Array.toString
```

***

### unshift()

```ts
unshift(...items): number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1412

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

##### items

...`Map`\<`string`, `string`\>[]

Elements to insert at the start of the array.

#### Returns

`number`

#### Inherited from

```ts
Array.unshift
```

***

### values()

```ts
values(): ArrayIterator<Map<string, string>>;
```

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93

Returns an iterable of values in the array

#### Returns

`ArrayIterator`\<`Map`\<`string`, `string`\>\>

#### Inherited from

```ts
Array.values
```
