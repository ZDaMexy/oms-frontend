// Static OMS subset of ppy/osu-web webpack.config.js at 2c596022a1345fbed288978e7fa5304df0359f50.
// Copyright (c) ppy Pty Ltd. Modified for OMS. AGPL-3.0-or-later; see /credits/.
const path = require('node:path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/player-site.tsx',
  output: {
    path: path.resolve(__dirname, 'portal'),
    filename: 'player-site.js',
    publicPath: '/portal/',
    clean: false,
  },
  devtool: false,
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'less-loader'] },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'player-site.css' })],
  optimization: { splitChunks: false, runtimeChunk: false },
  performance: { hints: 'warning', maxAssetSize: 700000, maxEntrypointSize: 850000 },
};
