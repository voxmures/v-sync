const fs = require('fs');
const path = require('path');
const VuePlugin = require('vue-loader/lib/plugin');

console.log(__dirname);

module.exports = {
	mode: process.env.NODE_ENV || 'development',

	entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    	const fullDir = path.join(__dirname, dir);
    	const entry = path.join(fullDir, 'app.js');
    	if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry))
      		entries[dir] = entry;

	    return entries;
	}, {}),

	output: {
		path: path.join(__dirname, '__build__'),
		filename: '[name].js',
		publicPath: '/__build__/'
	},

	module: {
	    rules: [
	    	{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	use: 'babel-loader'
	      	},
	      	{
	        	test: /\.vue$/,
	        	use: 'vue-loader'
	      	},
	      	{
	        	test: /\.css$/,
	        	use: [
	          		'vue-style-loader',
	          		'css-loader'
	        	]
	      	}
	    ]
  	},

  	resolve: {
  		extensions: ['.js', '.vue'],
    	alias: {
    		'vue': 'vue/dist/vue.esm.js',
      		'@voxmures/v-sync': path.join(__dirname, '..', 'src')
    	}
  	},

  	plugins: [
  		new VuePlugin()
  	]
}