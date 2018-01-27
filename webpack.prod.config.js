var webPackStrip = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader:webPackStrip.loader('console.log')
}
devConfig.module.rules.push(stripLoader);

module.exports=devConfig;