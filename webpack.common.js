const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: ['./src/js/polyfill.js'],
        vendor: ['babel-polyfill'],
        index: ['babel-polyfill', './src/js/index.js'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { watch: false }),
        new ExtractTextPlugin({filename: "styles/styles.css", allChunks: true}),
        new HTMLWebpackPlugin({
            title: 'THISISALLABOUT',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('manifest'),
        new webpack.HashedModuleIdsPlugin()
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