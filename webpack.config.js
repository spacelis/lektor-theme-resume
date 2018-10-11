/*  global  require  */
/*  global  module  */
/*  global  __dirname  */
var  path  =  require('path');
var  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports  =  {
  entry:  [
    './assets/js/resume.js'
    // './assets/vendor/academicons/css/academicons.css',
    // 'font-awesome/scss/font-awesome.scss'
  ],
  output:  {
    path:  path.resolve(__dirname, 'assets/static'),
    filename:  'resume-bundle.js'
  },
  devtool:  'eval',
  resolve:  {
    modules:  ['node_modules'],
    extensions:  ['.js']
  },
  module:  {
    rules:  [
      { test:  /\.js$/,  exclude:  /node_modules/,
        loader:  'babel-loader'  },
      { test: /\.(s?css)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '/static/fonts/'
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
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
