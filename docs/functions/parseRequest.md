[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / parseRequest

# Function: parseRequest()

```ts
function parseRequest(
   headers, 
   body, 
   log): object;
```

Defined in: [src/index.ts:49](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L49)

Parse a request from a Heroku-typed [External Service](https://help.salesforce.com/s/articleView?id=sf.external_services.htm&type=5).

## Parameters

### headers

`any`

The request's headers

### body

`any`

The request's body

### log

`any`

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
