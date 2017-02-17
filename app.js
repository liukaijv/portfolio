var express = require('express');
var path = require('path');
var app = express();

// static
app.use(express.static('dist'));

// website
app.use('/website', express.static(path.join(__dirname, '/website')));

// server
app.listen(8080,function(){
	console.log('server start');
});

module.exports = app;