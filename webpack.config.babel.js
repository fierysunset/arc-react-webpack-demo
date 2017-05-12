import webpack from 'webpack';
var nodeExternals = require('webpack-node-externals');
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = [
    {
        entry: './server.js',
        output: {
            path: __dirname + '/',
            filename: 'server.bundle.js',
        },
        module: {
            rules: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
                include: path.join(__dirname, 'pres')
            }]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
        ],
        target: 'node',
        externals: [nodeExternals()]
    },
    {
        entry: './pres/index.js',
        output: {
            path: __dirname + '/bin',
            filename: 'app.bundle.js',
        },
        module: {
            rules: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
                include: path.join(__dirname, 'pres')
            }]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
        ]
    }
]