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
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
}


// export
module.exports = {
  entry: entry,
  output: output,
  module: modules
}
