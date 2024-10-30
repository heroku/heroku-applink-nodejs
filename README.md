# Heroku Integration - Salesforce SDK for Node.js

Use the Salesforce SDK for Node.js to develop [Heroku Integration](https://devcenter.heroku.com/articles/heroku-integration) managed apps that interact with Salesforce and Data Cloud orgs.

Salesforce SDK for Node.js provides:
- Utilities to parse requests from Salesforce Heroku-type [External Services](https://help.salesforce.com/s/articleView?id=sf.external_services.htm&type=5) and Data Cloud [Data Action Targets](https://help.salesforce.com/s/articleView?id=sf.c360_a_create_a_data_action_target_of_webhook_type.htm&type=5) 
hydrating SDK objects that response the request: [InvocationEvent](docs/interfaces/InvocationEvent.md) and [Context](docs/interfaces/Context.md).
- Objects that encapsulate the requesting Salesforce or Data Cloud [Org](docs/interfaces/Org.md) and [User](docs/interfaces/User.md).
- Utility objects that wrap Salesforce and Data Cloud APIs to perform simple CRUD operations and complex record manipulations. 

And much more!

## Documentation
For more information, see [API docs](docs/README.md).

## Example
Example use of the Salesforce SDK for Node.js provided as part of the [Heroku Integration CLI Plugin's](https://github.com/heroku/heroku-cli-plugin-integration) `integration:project` template:  
```javascript
fastify.get('/accounts', async function (request, reply) {
    const {event, context, logger} = request.sdk;

    logger.info(`GET /accounts: ${JSON.stringify(event.data || {})}`);

    const query = 'SELECT Id, Name FROM Account';

    if (process.env.SALESFORCE_ORG_NAME) {
        // If an org reference is set, query Accounts in that org
        const orgName = process.env.SALESFORCE_ORG_NAME;
        const herokuIntegrationAddon = request.sdk.addons.herokuIntegration;

        logger.info(`Getting org '${orgName}' connection from Heroku Integration add-on...`);
        const anotherOrg = await herokuIntegrationAddon.getConnection(orgName);

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