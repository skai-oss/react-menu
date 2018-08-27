const path = require("path");

const { babelLoader, cssLoader } = require("./loaders");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  externals: {
    react: "react"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    library: "@kenshooui/react-menu",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [babelLoader, cssLoader]
  }
};
