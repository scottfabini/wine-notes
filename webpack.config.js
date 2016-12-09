const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.src  // entry point file in ~/src directory must be named index.js
  },
  output: {
    path: PATHS.build, // compiled code will reside in build directory
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ],    
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
      }
    ],
    loaders: [
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      { 
        test: /\.css$/, 
        exclude: /\.useable\.css$/, 
        loader: 'style-loader!css-loader'
      },
      { 
        test: /\.useable\.css$/, 
        loader: 'style-loader/useable!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {

          presets: ['react', 'es2015']
        }
      }
    ]
  }
};