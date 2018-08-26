const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'now'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '_CSS_': path.resolve(__dirname, 'src/css/'),
            '_JS_': path.resolve(__dirname, 'src/js/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
