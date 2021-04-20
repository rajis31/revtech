const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports={
    entry: './src/index.js',
    mode: "production",
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "./bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|jp?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {plugin:['lodash']}

                },
            ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
        }),
        new CaseSensitivePathsPlugin()    ]
}

