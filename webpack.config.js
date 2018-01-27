

module.exports = {
    entry: './src/js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader:"jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
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