import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

const getFlaggedConfigs = () => [
    {
        entry: './server.js',
        output: {
            path: __dirname + '/',
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
                include: path.join(__dirname, 'src/pres')
            }]
        },
        plugins: [
            new ExtractTextWebpackPlugin('style.css')
        ],
        target: 'node',
        externals: [nodeExternals()]
    },
    {
        entry: './src/pres/index.js',
        output: {
            path: __dirname + '/bin',
            filename: 'app.bundle.js',
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
                include: path.join(__dirname, 'src/pres')
            }]
        },
        plugins: [
            new ExtractTextWebpackPlugin('style.css')
        ]
    }
]

module.exports = getFlaggedConfigs;