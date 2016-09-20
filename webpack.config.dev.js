var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true&timeout=20000&noInfo=false&quiet=false',
        path.join(__dirname,'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};