var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');

const PORT = process.env.PORT || 3000;

const CONTENT_ARRAY = require('./content');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('*/material-design-lite', express.static(__dirname + '/node_modules/material-design-lite/'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

CONTENT_ARRAY.forEach(function(recepe) {
	app.get(recepe.path, function (req, res) {
		res.render(recepe.view, recepe);
	});
});
 
app.listen(PORT, function() {
	console.log('Environment = ' + app.get('env') +
    '\n__dirname   = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd() +
    '\nServer is listening on port ' + PORT);
});