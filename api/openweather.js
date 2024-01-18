/*const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://api.openweathermap.org',
        changeOrigin: true
    });
    return proxy(req, res);
};
*/
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://api.openweathermap.org',
        changeOrigin: true,
        pathRewrite: {
            '^/openweather': '',
        },
    });
    return proxy(req, res);
};
