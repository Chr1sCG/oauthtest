const config = require(`./config`);

const OAuth2 = {
    id: 'oauth2',
    name: 'OAuth v2 Authentication',
    description: 'OAuth v2-based authentication and authorization for access to Notion',
    fields: [
        {
            title: 'callback_uri',
            description: 'OAuth post-auth redirect URI',
            type: 'oauth',
            id: 'callback_uri',
        },
    ],
};

/*
const getAuthenticationStrategies = () => {
    return [OAuth2];
};
*/

module.exports.connector = () => ({
    id: `notion-app`,
    name: `Notion`,
    version: config.version,
    website: `https://notion.com`,
    description: `More than a doc. Or a table. Customize Notion to work the way you do.`,
    authentication: [OAuth2],
    responsibleFor: {
        dataSynchronization: true,
    },
    sources: [],
});
