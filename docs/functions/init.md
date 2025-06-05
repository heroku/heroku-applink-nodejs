[**@heroku/applink v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea](../README.md) / init

# Function: init()

```ts
function init(): object
```

Functional organized modules having helper methods for addons, Data Cloud, and Salesforce.

## Returns

`object`

### addons

```ts
addons: object;
```

### addons.applink

```ts
applink: object;
```

### addons.applink.getAuthorization()

```ts
getAuthorization: (developerName, attachmentNameOrColorOrUrl) => Promise<Org>;
```

Get stored Salesforce or Data Cloud org user credentials for given developer name or alias.

#### Parameters

• **developerName**: `string`

or alias

• **attachmentNameOrColorOrUrl**: `string` = `...`

Either an attachment name, (e.g. "HEROKU_APPLINK"), color (e.g. "purple" in "HEROKU_APPLINK_PURPLE") or the value of the attachment's API_URL config. Defaults to "HEROKU_APPLINK"

#### Returns

`Promise`\<[`Org`](../interfaces/Org.md)\>

Org

### dataCloud

```ts
dataCloud: object;
```

### dataCloud.parseDataActionEvent()

```ts
parseDataActionEvent: (payload) => DataCloudActionEvent;
```

Parse a [Data Action Target](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_a_data_action_target_of_webhook_type.htm&type=5) request.

#### Parameters

• **payload**: `any`

#### Returns

[`DataCloudActionEvent`](../interfaces/DataCloudActionEvent.md)

### salesforce

```ts
salesforce: object;
```

### salesforce.parseRequest()

```ts
parseRequest: (headers, body, log) => object;
```

Parse a request from a Heroku-typed [External Service](https://help.salesforce.com/s/articleView?id=sf.external_services.htm&type=5).

#### Parameters

• **headers**: `any`

The request's headers

• **body**: `any`

The request's body

• **log**: `any`

A logger instance

#### Returns

`object`

Object containing InvocationEvent,Context,Logger instances hydrated from the request

##### context

```ts
context: Context;
```

##### event

```ts
event: InvocationEvent<any>;
```

##### logger

```ts
logger: Logger;
```

## Defined in

[src/index.ts:25](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L25)
