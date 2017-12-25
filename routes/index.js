/*******************************************/
/* TDella Creations Routes Script          */
/*******************************************/
// TODO: Add utils cleanObj method to verify fresh object used every tiome
// TODO: Add utils.pageObj method to add default data object for page renders
var utils, pubdir, data, config;

config = require('../src/config');
utils = require('../src/utils');

exports.add = function (app) {

  data = utils.addPageObj( config );

	app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

	app.get('/', function (req, res) {
    console.log('render home page');

		res.render('home', data);
	});

  app.get('/order-now', function (req, res) {
    console.log('render order page wizard');

    res.render('order', data);
  });

	app.get('/about', function (req, res) {
		console.log('render about page');

		res.render('about', data);
	});

	app.get('/portfolio', function (req, res) {
		console.log('render portfolio page');

		res.render('portfolio', data);
	});

  // TODO: Remove this route and its views
  app.get('/builder', function (req, res) {
    console.log('render builder page');

    res.render('builder', data);
  });

};
