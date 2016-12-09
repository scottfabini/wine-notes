var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,

    files: [
      'test/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },
    
    webpack: webpackConfig
    
  })
}