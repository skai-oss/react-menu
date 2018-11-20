const glob = require("glob");
const path = require("path");

const { babelLoader, cssLoader, mdLoader } = require("./loaders");

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
    libraryTarget: "umd"
  },
  module: {
    rules: [babelLoader, cssLoader, mdLoader]
  }
};
