const babelLoader = {
  test: /(\.jsx|\.js)$/,
  loader: "babel-loader",
  exclude: /(node_modules(?!\/webpack-dev-server)|bower_components)/
};

const cssLoader = {
  test: /(\.scss|\.css)/,
  loaders: [
    "style-loader",
    "css-loader?modules&importLoaders=1&localIdentName=kn-[name]__[local]___[hash:base64:5]",
    "sass-loader"
  ]
};

const mdLoader = {
  test: /\.md$/,
  loader: "raw"
};

module.exports = {
  babelLoader,
  mdLoader,
  cssLoader
};
