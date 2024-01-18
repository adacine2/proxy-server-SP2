const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api/ticketmaster': '/discovery/v2/events.json', // Rewrite the path for the proxy
        },
        // Ensure the query string is preserved
        onProxyReq: (proxyReq, req) => {
            if (req.url.includes('?')) {
                const queryString = req.url.split('?')[1];
                proxyReq.path += `?${queryString}`;
            }
        },
    });
    return proxy(req, res);
};
/*
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com/discovery/v2/events',
        changeOrigin: true
    });
    return proxy(req, res);
};
*/