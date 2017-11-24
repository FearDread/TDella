var server, host, port;
var fs = require('fs');
var path = require('path');
var express = require('express');


var routes = require('./routes');
var utils = require('/src/utils');
var bodyParser = require('body-parser');

app = express();
pubdir = __dirname;


app.use(bodyParser.urlencoded({
	extended: true
	}
));
app.use(bodyParser.json());

app.set('views', pubdir, '/public/views');
app.set('view engine', 'jade');

app.use(less(path.join(pubdir, '/src', 'less'), {
	dest: path.join(pubdir, '/public', 'css')
	}
));

server = app.listen(4001, function () {
	host = server.address().address;
	port = server.address().port;

	console.log('TDELLA RUNNING');
	}
);



