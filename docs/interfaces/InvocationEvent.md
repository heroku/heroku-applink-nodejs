[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / InvocationEvent

# Interface: InvocationEvent\<A\>

Defined in: [src/index.ts:125](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L125)

An InvocationEvent is representative of the data associated with the occurrence of an event,
and supporting metadata about the source of that occurrence.

## Type Parameters

### A

`A`

## Properties

### data

```ts
readonly data: A;
```

Defined in: [src/index.ts:126](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L126)

The payload of the event

***

### dataContentType?

```ts
readonly optional dataContentType: string;
```

Defined in: [src/index.ts:127](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L127)

The media type of the event payload that is accessible in data

***

### id

```ts
readonly id: string;
```

Defined in: [src/index.ts:128](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L128)

The platform event occurrence id for event invocation.

***

### time?

```ts
readonly optional time: string;
```

Defined in: [src/index.ts:129](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L129)

The timestamp of when the occurrence happened. If the time of the occurrence
cannot be determined then this attribute may be set to some other time
(such as the current time), however all producers for the same source must be consistent in this
respect. In other words, either they all use the actual time of the occurrence or they all use
the same algorithm to determine the value used.
