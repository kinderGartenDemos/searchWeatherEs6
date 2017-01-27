var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/js/app.js",
  output: {
    path:  "./dist/js",
    filename: "bundle.js"
  },
  module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	}
};