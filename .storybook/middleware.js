const proxy = require('http-proxy-middleware'); 
const ConfluenceMiddleware = require('storybook-aem-confluence/middleware');

module.exports = router => {
    // any other code

    router.use(
        '/confluence/:id',
        ConfluenceMiddleware({
            baseUrl: 'https://bxpress.atlassian.net/wiki',
            username: '',
            password: ''
            //username: process.env.confluenceUser,
            //password: process.env.confluencePassword
        })
    );
}