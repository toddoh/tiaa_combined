const merge = require('webpack-merge');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new MinifyPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});