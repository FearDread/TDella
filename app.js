/*******************************************/
/* TDella Creations Application Script     */
/*******************************************/
var server, host, port, utils, conig, routes;

/* NPM Modules */
var fs = require('fs');
var path = require('path');
var express = require('express');
var session = require('express-session');
var less = require('less-middleware');
var flash = require('connect-flash');
var bodyParser = require('body-parser');

/* Begin App */
app = express();
pubdir = __dirname;
routes = require('./routes');
utils = require('./src/utils');
config = require('./src/config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', pubdir + '/public/views');
app.set('view engine', 'pug');

app.use(less(path.join(pubdir, '/src', 'less'), {
	dest: path.join(pubdir, '/public', 'css')
	}
));

app.use(express.static(path.join(pubdir, '/public')));
app.use(session({ secret: config.secret }));
app.use(flash());

routes.add(app);
 
server = app.listen(config.port, function () {
	host = server.address().address;
	port = server.address().port;

	console.log('TDELLA RUNNING : ' + config.hostname);
	console.log('public dir = ' + pubdir);
});

