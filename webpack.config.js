const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve('app'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8100
    },
    resolve: {
        modules: [__dirname, 'app/components', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
      },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}