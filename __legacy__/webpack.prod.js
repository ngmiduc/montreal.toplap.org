const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {

  mode: 'production',
  devtool: 'source-map',

  optimization: {
   minimizer: [
     new UglifyJsPlugin({
       cache: true,
       parallel: true,
       sourceMap: true // set to true if you want JS source maps
     }),
     new OptimizeCSSAssetsPlugin({})
   ]
 },

 plugins: [
   new MiniCssExtractPlugin({
     filename: "[name].css",
     chunkFilename: "[id].css"
   })
 ]

});
