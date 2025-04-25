# Node.js SDK for Heroku AppLink

Use the Node.js SDK for Heroku AppLink to develop [Heroku AppLink](https://devcenter.heroku.com/articles/applink) managed apps that interact with Salesforce and Data Cloud orgs.

 Node.js SDK for Heroku AppLink provides:
- Utilities to parse requests from Salesforce Heroku-type [External Services](https://help.salesforce.com/s/articleView?id=sf.external_services.htm&type=5) and Data Cloud [Data Action Targets](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_a_data_action_target_of_webhook_type.htm&type=5) 
hydrating SDK objects that response the request: [InvocationEvent](docs/interfaces/InvocationEvent.md) and [Context](docs/interfaces/Context.md).
- Objects that encapsulate the requesting Salesforce or Data Cloud [Org](docs/interfaces/Org.md) and [User](docs/interfaces/User.md).
- Utility objects that wrap Salesforce and Data Cloud APIs to perform simple CRUD operations and complex record manipulations. 

And much more!

## Documentation
For more information, see [API docs](docs/README.md).

## Example
Example use of the Node.js SDK for Heroku AppLink provided as part of the [Heroku AppLink CLI Plugin's](https://github.com/heroku/heroku-cli-plugin-applnk) `applink:project` template:  
```javascript
fastify.get('/accounts', async function (request, reply) {
    const {event, context, logger} = request.sdk;

    logger.info(`GET /accounts: ${JSON.stringify(event.data || {})}`);

    const query = 'SELECT Id, Name FROM Account';

    if (process.env.SALESFORCE_ORG_NAME) {
        // If an org reference is set, query Accounts in that org
        const orgName = process.env.SALESFORCE_ORG_NAME;
        const applinkAddon = request.sdk.addons.applink;

        logger.info(`Getting org '${orgName}' connection from Heroku Applink add-on...`);
        const anotherOrg = await applinkAddon.getConnection(orgName);

        logger.info(`Querying org '${orgName}' (${anotherOrg.id}) Accounts...`);
        try {
            const result = await anotherOrg.dataApi.query(query);
            const accounts = result.records.map(rec => rec.fields);
            logger.info(`For org '${orgName}' (${anotherOrg.id}), found ${accounts.length} Accounts`);
        } catch (err) {
            logger.error(err.message);
        }
    }

    // Query invoking org's Accounts
    const org = context.org;
    logger.info(`Querying invoking org (${org.id}) Accounts...`);
    const result = await org.dataApi.query(query);
    const accounts = result.records.map(rec => rec.fields);
    logger.info(`For invoking org (${org.id}), found the following Accounts: ${JSON.stringify(accounts || {})}`);
    return accounts;
});
```

## Testing
This project has CI tests to ensure quality.

In addition, to test changes in a deployed Heroku app, you can use `yarn pack` to create a tar ball. This can be consumed in a Heroku node app by committing it to source and referencing it in `package.json`:

```
{
    ...
    "dependencies": {
        "@heroku/salesforce-sdk-nodejs": "file:./src/heroku-salesforce-sdk-nodejs-v0.3.4-ea.tgz",
    }
    ...
}
```