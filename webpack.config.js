const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./config.json");
const isDev = process.env.KMENV === "DEV";

module.exports = {
  devtool: "inline-source-map",
  mode: isDev ? "development" : "production",
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: isDev ? "[name].bundle.js" : "[name].[hash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    watchFiles: [path.resolve(__dirname, "./src")],
    compress: true,
    hot: true,
    port: 3000,
  },
};
