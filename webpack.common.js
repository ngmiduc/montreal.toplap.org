const webpack = require("webpack")

const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const autoprefixer = require("autoprefixer")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const devMode = process.env.NODE_ENV !== "production"

module.exports = {
  entry: "./src/index.jsx",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss|css$/,
        exclude: /node_modules/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              url: false,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              // Or array of paths
              resources: ["./src/_variables.scss"]
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],

  output: {
    chunkFilename: "[name].js",
    path: __dirname + "/docs",
    publicPath: "",
    filename: "bundle.js"
  }
}
