var fs = require('fs');
var express = require('express');


var routes = require('./routes');
var utils = require('/src/utils');
var bodyParser = require('body-parser');

app = express();
pubdir = __dirname;


app.use(bodyParser.urlencoded({
	extended: true
	}
);
app.use(bodyParser.json());

app.set('views', pubdir, '/public/views');
app.set('view engine', 'jade');


