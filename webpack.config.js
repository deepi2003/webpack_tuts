var path = require('path');
var webpack = require('webpack');


// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin( { name: "login", filename: "login.js", minChunks: "Infinity"});
module.exports = {
    context: path.resolve('src/js'),
    entry: {
        about: './about.js',
        index: './index.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: '[name].js'
    },
    // plugins: [commonsPlugin],

    devServer:{
        contentBase: 'public'
    },

    module: {
        rules: [
        ],
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },
    watch: true,

}