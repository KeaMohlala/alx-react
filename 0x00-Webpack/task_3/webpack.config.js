const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8564,
        open: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
};
