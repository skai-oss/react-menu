const webpack = require("webpack");

const definePlugin = env =>
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(env)
    }
  });

module.exports = {
  definePlugin
};
