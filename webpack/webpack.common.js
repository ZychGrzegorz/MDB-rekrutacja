const Path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'js/index': Path.resolve(__dirname, '../src/static/js/'),
    'css/index': Path.resolve(__dirname, '../src/static/css/index.css'),
  },
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: './static/[name].min.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src/index.html') },
      { from: Path.resolve(__dirname, '../src/static/img'), to: './static/img' },
    ]),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      path: Path.join(__dirname, '../dist'),

      filename: './static/[name].min.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
