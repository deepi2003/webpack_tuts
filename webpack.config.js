var path = require('path');
var webpack = require('webpack');


// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin( { name: "login", filename: "login.js", minChunks: "Infinity"});
var extractTextWebPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('src/js'),
    entry: {
        about: './about.js',
        index: './index.js'
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: '[name].js'
    },
    plugins: [
        new extractTextWebPlugin("style.css")
    ],


    devServer:{
        contentBase: 'public'
    },

    module: {
        rules: [
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use: extractTextWebPlugin.extract( {fallback: "style-loader", use:"css-loader!autoprefixer-loader"})
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                loader:extractTextWebPlugin.extract( { fallback: "style-loader", use: "css-loader!autoprefixer-loader!sass-loader"})
            },
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ],
        loaders: [

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },
    watch: true,

}