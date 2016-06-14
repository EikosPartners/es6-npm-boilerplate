var webpack = require('webpack');
var path    = require('path');

module.exports = {
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: [
                    path.join(__dirname, 'src/'),
                    path.join(__dirname, 'test/tests/')
                ],
                exclude: /\.html?$/,
                query: {
                    presets: 'es2015'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    }
}
