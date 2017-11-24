var server, host, port;

var fs = require('fs');
var path = require('path');
var express = require('express');
var less = require('less-middleware');
var flash = require('connect-flash');


var routes = require('./routes');
var utils = require('./src/utils');
var config = require('./src/config');
var bodyParser = require('body-parser');

app = express();
pubdir = __dirname;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', pubdir + '/public/views');
app.set('view engine', 'pug');

app.use(less(path.join(pubdir, '/src', 'less'), {
	dest: path.join(pubdir, '/public', 'css')
	}
));

app.use(express.static(path.join(pubdir, '/public')));
app.use(flash());

routes.add(app);

server = app.listen(4005, function () {
	host = server.address().address;
	port = server.address().port;

	console.log('TDELLA RUNNING');
	console.log('public dir = ' + pubdir);
});



