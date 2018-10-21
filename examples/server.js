const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);
const express = require('express');
const rewrite = require('express-urlrewrite');

const app = express();

app.use(middleware(compiler, {
	publicPath: '/__build__/'
}));

const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach(file => {
	if (file === 'static') return;
	if (fs.statSync(path.join(__dirname, file)).isDirectory())
		app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'));
});

app.use(express.static(__dirname));

const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});