/*  global  require  */
/*  global  module  */
/*  global  __dirname  */
var  path  =  require('path');
var  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports  =  {
  entry:  {
    'app':  './js/resume.js',
    'styles':  './scss/resume.scss'
  },
  output:  {
    path:  path.dirname(__dirname)  +  '/assets/static/gen',
    filename:  '[name].js'
  },
  devtool:  '#cheap-module-source-map',
  resolve:  {
    modules:  ['node_modules'],
    extensions:  ['.js']
  },
  module:  {
    rules:  [
      { test:  /\.js$/,  exclude:  /node_modules/,
        loader:  'babel-loader'  },
      { test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test:  /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        loader:  'file'  }
    ]
  },
  plugins:  [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
