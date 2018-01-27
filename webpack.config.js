var path = require('path');
module.exports = {
    entry: './src/js',
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },

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