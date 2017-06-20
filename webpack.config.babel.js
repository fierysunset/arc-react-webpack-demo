import arcWebpack from 'arc-webpack';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpack from 'webpack';

// Any potential combinations of flagsets your app may specialize for
const flagset = [
    [],
    ['mobile'],
    ['mobile', 'iphone'],
    ['mobile', 'android'],
    ['desktop'],
    ['cornify'],
    ['cornify', 'mobile']
];

const clientConfig = (...flags) => ({
    entry: './src/app-client',
    resolve: {
        plugins: [
            new arcWebpack.adaptFiles(flags)
        ],
        modules: ['node_modules', 'src', path.resolve(__dirname, 'src/components')],
        extensions: ['.js', '.json', '.arc']
    },
    output: {
        path: arcWebpack.getOutputPath(__dirname, 'DIST', flags),
        filename: 'client.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            loaders: ExtractTextWebpackPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'style-loader'
            }),
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css'),
        new HtmlWebpackPlugin()
    ]
});

const serverConfig = () => ({
    entry: './src/app-server/server',
    resolve: {
        modules: ['node_modules', 'src', path.resolve(__dirname, 'src/components')],
        extensions: ['.js', '.json', '.arc']
    },
    output: {
        path: __dirname + '/DIST',
        filename: 'server.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            loader: 'css-loader/locals?modules',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.arc$/,
            loader: 'arc-webpack/proxy-loader',
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

// One for the server
configArr.push(serverConfig());

// And one per flagset for the client
flagset.map(flags => {
    configArr.push(clientConfig(...flags));
});

module.exports = configArr;