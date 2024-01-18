const { createProxyMiddleware } = require('http-proxy-middleware');

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
