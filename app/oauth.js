const got = require(`got`);
const CLIENT_ID = process.env.ENV_CLIENT_ID;

module.exports = {
    getAuthorizeUrl: (callbackUri, state) => {
        const queryParams = {
            state,
            redirect_uri: callbackUri,
            response_type: 'code',
            client_id: CLIENT_ID,
            owner: `user`,
        };
        const queryParamsStr = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join(`&`);
        return `https://api.notion.com/v1/oauth/authorize?${queryParamsStr}`;
    }
};
