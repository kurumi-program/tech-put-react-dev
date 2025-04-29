const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config(); // .envファイルを読み込む

module.exports = {
  entry: "./src/js/index.tsx",
  output: {
    publicPath: "/",
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
    historyApiFallback: {
      index: "index.html",
    },
    devMiddleware: {
      writeToDisk: (filePath) => {
        return !/\.hot-update\.(js|json|js\.map)$/.test(filePath);
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /(\.ts|\.tsx)$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_BASE_URL": JSON.stringify(process.env.REACT_APP_BASE_URL),
      "process.env.REACT_APP_BASE_URL_DEV": JSON.stringify(process.env.REACT_APP_BASE_URL_DEV),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
