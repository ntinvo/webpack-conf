const path = require("path")

// entry point to build
const entry = {
  main: [
    "./src/index.js",
  ]
}

// output file
const output = {
  path: path.resolve(__dirname, "dist"),
  filename: "main.js"
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
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    },
  ]
}

// resolve
const resolve = {
  extensions: ["*", ".js", ".jsx"]
}

// export
module.exports = {
  entry: entry,
  output: output,
  module: modules,
  resolve: resolve
}
