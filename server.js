var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('.'));

var server = app.listen(8090, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port);
});
