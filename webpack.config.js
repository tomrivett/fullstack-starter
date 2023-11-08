const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(woff2?|ttf|eot|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: { limit: 8192 },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: { name: '[path][hash].[ext]' },
      //     },
      //   ],
      // },
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      template: './client/public/index.html',
    }),
    new webpack.ProgressPlugin(),
  ],
};
