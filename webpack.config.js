const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// entry point to build
const entry = {
  main: [
    "./src/index.js",
  ]
}

// output file
const output = {
  path: path.resolve(__dirname, "dist"),
  filename: "./js/[name].[chunkhash].js"
}

// modules
const modules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(css|scss)$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: "file-loader"
      }
    }
  ]
}

// plugins
const plugins = [
  new CleanWebpackPlugin(["dist"]),
  new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: "./src/index.html",
    filename: "index.html"
  }),
  new MiniCssExtractPlugin({
      filename: "./css/style.[contenthash].css",
  }),
]

// resolve
const resolve = {
  extensions: ["*", ".js", ".jsx"]
}

// export
module.exports = {
  entry: entry,
  output: output,
  module: modules,
  resolve: resolve,
  plugins: plugins
}
