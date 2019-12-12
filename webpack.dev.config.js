const { resolve } = require('path');
const webpack = require('webpack');

const config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: [
    "webpack-dev-server/client?http://127.0.0.1:3355",
    'webpack/hot/only-dev-server',
    resolve(__dirname, './src/index.tsx'),
  ],
  output: {
    filename: '[name].js',
    publicPath: "http://127.0.0.1:3355",
  },
  devServer: {
    contentBase: resolve(__dirname, '../public/assets/js'),
    port: 3355,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify({
          DEBUG_MODE: true,
        })
      }
    })
  ]
  ,
};

module.exports = config;
