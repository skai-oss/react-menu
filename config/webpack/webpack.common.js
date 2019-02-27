const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { babelLoader, cssLoader, mdLoader } = require("./loaders");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  externals: {
    react: "react"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
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
