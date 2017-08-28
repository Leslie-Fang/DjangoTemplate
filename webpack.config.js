var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

module.exports = {
    entry: {
        main:'./Front_babel/main.js',
        signup:'./Front_babel/signup.js'
    },
    output: {
        path : path.resolve(__dirname, 'Front_webpack/'),
        filename: '[name].js'
    },
    plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}