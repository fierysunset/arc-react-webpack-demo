import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

const clientConfig = () => ({
    entry: './src/app-client',
    output: {
        path: __dirname + '/DIST',
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
            use: ExtractTextWebpackPlugin.extract({
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

const serverConfig = () => ({
    entry: './src/app-server/server',
    output: {
        path: __dirname + '/DIST',
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
            use: 'css-loader/locals?modules',
            include: path.join(__dirname, 'src/components')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css')
    ],
    target: 'node',
    externals: [nodeExternals()]
});

const getFlaggedConfigs = () => [clientConfig(), serverConfig()];

module.exports = getFlaggedConfigs;