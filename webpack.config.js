const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]",
        clean: true,
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@utils": path.resolve(__dirname, "./src/utils/"),
            "@templates": path.resolve(__dirname, "./src/templates/"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
            "@images": path.resolve(__dirname, "./src/assets/images/"),
        },
    },
    module : {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images",
                },
            ],
        }),

    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
};