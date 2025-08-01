[**@heroku/applink v1.0.0**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0](../README.md) / parseRequest

# Function: parseRequest()

```ts
function parseRequest(
   headers, 
   body, 
   log): object
```

Parse a request from a Heroku-typed [External Service](https://help.salesforce.com/s/articleView?id=sf.external_services.htm&type=5).

## Parameters

• **headers**: `any`

The request's headers

• **body**: `any`

The request's body

• **log**: `any`

A logger instance

## Returns

`object`

Object containing InvocationEvent,Context,Logger instances hydrated from the request

### context

```ts
context: Context;
```

### event

```ts
event: InvocationEvent<any>;
```

### logger

```ts
logger: Logger;
```

## Defined in

[src/index.ts:49](https://github.com/heroku/heroku-applink-nodejs/blob/8285fe9db0bc3fb84b8b357e7da6a6202f07286d/src/index.ts#L49)
