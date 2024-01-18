/*const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api/ticketmaster': '',
        },
    });
    return proxy(req, res);
};
*/
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://app.ticketmaster.com/discovery/v2/events?',
        changeOrigin: true
    });
    return proxy(req, res);
};
