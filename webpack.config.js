const { resolve } = require('path');
const webpack = require('webpack');
const { smart } = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = isProduction ? require('./webpack.prod.config') : require('./webpack.dev.config');

const base = {
  mode: isProduction ? 'production' : 'development',
  output: {
    path: resolve(__dirname, '../public/assets/js'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
};

module.exports = smart(base, webpackConfig);
