[**@heroku/salesforce-sdk-nodejs v0.3.4-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v0.3.4-ea](../README.md) / InvocationEvent

# Interface: InvocationEvent\<A\>

An InvocationEvent is representative of the data associated with the occurrence of an event,
and supporting metadata about the source of that occurrence.

## Type Parameters

• **A**

## Properties

### data

```ts
readonly data: A;
```

The payload of the event

#### Defined in

[src/index.ts:122](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L122)

***

### dataContentType?

```ts
readonly optional dataContentType: string;
```

The media type of the event payload that is accessible in data

#### Defined in

[src/index.ts:123](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L123)

***

### id

```ts
readonly id: string;
```

The platform event occurrence id for event invocation.

#### Defined in

[src/index.ts:124](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L124)

***

### time?

```ts
readonly optional time: string;
```

The timestamp of when the occurrence happened. If the time of the occurrence
cannot be determined then this attribute may be set to some other time
(such as the current time), however all producers for the same source must be consistent in this
respect. In other words, either they all use the actual time of the occurrence or they all use
the same algorithm to determine the value used.

#### Defined in

[src/index.ts:125](https://github.com/cwallsfdc/salesforce-sdk-nodejs/blob/59161db9ea389cffac0d54282abb2c1e82011d42/src/index.ts#L125)
