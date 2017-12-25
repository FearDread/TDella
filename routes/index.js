/*******************************************/
/* TDella Creations Routes Script          */
/*******************************************/
// TODO: Add utils cleanObj method to verify fresh object used every tiome
// TODO: Add utils.pageObj method to add default data object for page renders
var utils, pubdir, data, config, php;

php = require('../src/modules/php');
config = require('../src/config');
utils = require('../src/utils');

exports.add = function (app) {

  data = utils.addPageObj( config );

	app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

  app.use('*.php',function (request, response, next) {
    console.log('php module : ', php);

    php.phpFolder = '../src/php/';
    php.parseFile(request.originalUrl, function (result) {
      response.write(result);
      response.end();
    });
  });

	app.get('/', function (req, res) {

		res.render('home', data);
	});

  app.get('/order-now', function (req, res) {

    res.render('order', data);
  });

	app.get('/about', function (req, res) {

		res.render('about', data);
	});

	app.get('/portfolio', function (req, res) {

		res.render('portfolio', data);
	});
};
