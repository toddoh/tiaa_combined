const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        vendor: ['babel-polyfill', 'lit-html', 'lodash', 'moment', 'jquery', 'whatwg-fetch'],
        index: ['./src/js/index.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { watch: false }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: true, 
            children: true
        }),
        new ExtractTextPlugin({filename: "styles/styles.css", allChunks: true}),
        new HTMLWebpackPlugin({
            title: 'THISISALLABOUT',
            template: 'src/index.html'
        }),
        new webpack.HashedModuleIdsPlugin()/*,
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })*/
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname + '/src/js',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }]
                })
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=res/&publicPath=../'
            }
        ],
    }
}