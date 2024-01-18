/*
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api/ticketmaster': '', // Rewrite the path for the proxy
        },
        onProxyReq: (proxyReq, req) => {
            // Append the API key from the environment variable
            const queryString = req.url.includes('?') ? req.url.split('?')[1] : '';
            proxyReq.path += `?apikey=${process.env.TICKETMASTER_API_KEY}&${queryString}`;
        },
    });
    return proxy(req, res);
};


*/
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com/discovery/v2/events.json?',
        changeOrigin: true,
        pathRewrite: {
            '^/api/ticketmaster': '',
        },
    });
    return proxy(req, res);
};