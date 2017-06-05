import adaptiveImportsWebpack from '../adaptive-imports/webpack';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpack from 'webpack';

const flagset = [
    [],
    ['mobile'],
    ['mobile', 'iphone'],
    ['mobile', 'iphone', 'ios'],
    ['desktop']
];

const clientConfig = (...flags) => ({
    entry: './src/app-client',
    resolve: {
        plugins: [
            new adaptiveImportsWebpack.adaptFiles(flags)
        ]
    },
    output: {
        path: adaptiveImportsWebpack.getOutputPath(__dirname, 'DIST', flags),
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
        new ExtractTextWebpackPlugin('style.css'),
        new HtmlWebpackPlugin()
    ]
});

const serverConfig = (...flags) => ({
    entry: './src/app-server',
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

// Array of webpack configs
let configArr = [];

const getFlaggedConfigs = () => {
    flagset.map(flags => {
        // Client configs
        configArr.push(clientConfig(...flags));
        // Server configs
        configArr.push(serverConfig(...flags));
    });
    return configArr;
}

module.exports = getFlaggedConfigs;