const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './docs',
    hot: true,
    historyApiFallback: true,
    watchOptions: {
    ignored: /node_modules/
  }
  }

});
