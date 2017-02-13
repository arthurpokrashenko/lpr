const path    = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = !!process.env.EXTRACT_STYLES;
const hotReload = process.env !== 'production' && !process.env.NO_HOT_RELOAD;

module.exports = {
  entry:  [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      { test:  /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  // plugins: (() => {
  //   const plugins = [
  //     new webpack.DefinePlugin({
  //       'process.env': JSON.stringify({
  //         NODE_ENV: process.env.NODE_ENV,
  //       })
  //     }),
  //     new webpack.HotModuleReplacementPlugin(),
  //     new webpack.NoErrorsPlugin()
  //   ];

  //   // if (extractStyles) {
  //   //   plugins.unshift(new ExtractTextPlugin('index.css', {
  //   //     allChunks: true,
  //   //   }));
  //   // }

  //   // if (hotReload) {
  //   //   plugins.push(new webpack.HotModuleReplacementPlugin());
  //   // }

  //   return plugins;  
  // })(),    
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  },
  stats: {
    errorDetails: true,
    modules: true,
    reasons: true
  }
};