// import
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

// output file to the result dist directory
const output = {
  path: path.resolve(__dirname, "dist"),
  filename: "./js/[name].[hash].js"
}

// modules to handle different file types
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
      test: /\.(png|jpg|jpeg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "./images/[name].[hash].[ext]"
        }
      }
    },
    {
      test: /\.svg$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1000000,
          fallback: "file-loader",
          name: "./images/[name].[hash].[ext]"
        }
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
      filename: "./css/style.[hash].css",
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
  plugins: plugins,
  devtool: "inline-source-map"
}
