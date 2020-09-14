const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHTMLWebpackPlugin = require('script-ext-html-webpack-plugin');
const config = require('frint-config');
const path = require('path');

module.exports = {
    entry: {
        core: path.resolve(__dirname, 'core/index.js'),
        'order-summary': path.resolve(__dirname, 'order-summary/index.js'),
        'product-details': path.resolve(__dirname, 'product-details/index.js')
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'travix'
                    ]
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'layouts/index.ejs'),
            filename: path.resolve(__dirname, 'build/index.html')
        }),

        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'layouts/index2.ejs'),
            filename: path.resolve(__dirname, 'build/index2.h   tml')
        }),

        new ScriptExtHTMLWebpackPlugin({
            defaultAttribute: 'async'
        })
    ],
    externals: []
        .concat(config.lodashExternals)
        .concat(config.rxjsExternals)
        .concat(config.thirdPartyExternals)
        .concat(config.frintExternals)
};