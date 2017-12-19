/*******************************************/
/* TDella Creations Routes Script          */
/*******************************************/
var utils, pubdir, data, config;

config = require('../src/config');

exports.add = function (app) {

  path = '../';
  utils = require(path + 'src/utils');

	app.use( function (req, res, next) {
    console.log('TDELLA URI == ' + req.url);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		next();

	});

	app.get('/', function (req, res) {
    data = {
      title: 'T`Della Creations',
      url: config.website.name,
      social: config.website.social,
      environment: config.environment
    };

		console.log('render root :: ' + config);

		res.render('home', data);

	});

  app.get('/order-now', function (req, res) {
    console.log('render order page / wizard');

    res.render('order', {});

  });

	app.get('/about', function (req, res) {
		console.log('render about tracy page');

		res.render('about', {});

	});

	app.get('/portfolio', function (req, res) {
		console.log('render portfolio page');

		res.render('portfolio', {});

	});

  app.get('/builder', function (req, res) {
    console.log('render builder / demo page');

    res.render('builder', {});

  });

}
