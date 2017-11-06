const path = require('path');
const webpack = require('webpack');
/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})*/

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules(?!\/webpack-dev-server)/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules(?!\/webpack-dev-server)/ }
    ]
  },

  plugins: [
      
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
}