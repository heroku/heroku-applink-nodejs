[**@heroku/applink v1.0.0-ea.2**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea.2](../README.md) / HttpResponseError

# Class: HttpResponseError

Error thrown by the SDK when receiving non-2xx responses on HTTP requests.

## Extends

- `Error`

## Constructors

### new HttpResponseError()

```ts
new HttpResponseError(response): HttpResponseError
```

#### Parameters

• **response**: `Response`

#### Returns

[`HttpResponseError`](HttpResponseError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/utils/request.ts:14](https://github.com/heroku/heroku-applink-nodejs/blob/81b4143bb39e9e9309a4571ee63197ea8b696d90/src/utils/request.ts#L14)

## Properties

### message

```ts
message: string;
```

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

```ts
name: string;
```

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### response

```ts
response: any;
```

#### Defined in

[src/utils/request.ts:13](https://github.com/heroku/heroku-applink-nodejs/blob/81b4143bb39e9e9309a4571ee63197ea8b696d90/src/utils/request.ts#L13)

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

```ts
static optional prepareStackTrace: (err, stackTraces) => any;
```

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:98

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:100

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void
```

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:91
