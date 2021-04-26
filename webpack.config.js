const path = require("path")
// const miniCssExcteractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackHotPlugin = require("html-webpack-hot-plugin");
// const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");


let mode = 'development';
let target = "web";
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = "browserslist"
};



module.exports = {
    mode: mode,
    target: target,

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, path.basename(__dirname)),
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    // "ts-loader"
                ]
            },
        ],
    },

    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new miniCssExcteractPlugin(),
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html"
    //     }),

    // ],
    devtool: "source-map",
}