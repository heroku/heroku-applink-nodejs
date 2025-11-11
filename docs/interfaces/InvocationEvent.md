[**@heroku/applink v1.0.1**](../README.md) • **Docs**

***

[@heroku/applink v1.0.1](../README.md) / InvocationEvent

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

[src/index.ts:126](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L126)

***

### dataContentType?

```ts
readonly optional dataContentType: string;
```

The media type of the event payload that is accessible in data

#### Defined in

[src/index.ts:127](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L127)

***

### id

```ts
readonly id: string;
```

The platform event occurrence id for event invocation.

#### Defined in

[src/index.ts:128](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L128)

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

[src/index.ts:129](https://github.com/heroku/heroku-applink-nodejs/blob/a545e5f1cbfafe769c1c533001128d09d2bc0965/src/index.ts#L129)
