const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack-loader');
const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  start: path.join(__dirname, 'public')
};

module.exports = {
  module: {
    loaders: loaders
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.start,
    port: 8000,
    inline: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: {
      index: 'index.html'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
};
