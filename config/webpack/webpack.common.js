const glob = require("glob");
const path = require("path");

const { babelLoader, cssLoader, mdLoader } = require("./loaders");

module.exports = {
  entry: glob.sync("./src/components/**/*.js").reduce(
    (entries, entry) =>
      Object.assign(entries, {
        [entry
          .split("/")
          .pop()
          .replace(".js", "")]: entry
      }),
    { index: path.join(__dirname, "../../src/index.js") }
  ),
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
