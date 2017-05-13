import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

const getClientConfig = () => ({
    entry: './src/app-client/index.js',
    output: {
        path: __dirname + '/STATIC',
        filename: 'client.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loaders: ExtractTextWebpackPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            }),
            include: path.join(__dirname, 'src/components')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css')
    ]
});

const getServerConfig = () => ({
    entry: './server.js',
    output: {
        path: __dirname + '/STATIC',
        filename: 'server.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loaders: ExtractTextWebpackPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            }),
            include: path.join(__dirname, 'src/components')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css')
    ],
    target: 'node',
    externals: [nodeExternals()]
});

const getFlaggedConfigs = () => [getClientConfig(), getServerConfig()];

module.exports = getFlaggedConfigs;