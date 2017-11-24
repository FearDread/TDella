
exports.add = function (app) {

	app.use( function (req, res, next) {
		console.log('all routes hit');

		next();

	});

	app.get('/', function (req, res) {
		console.log('render root');

		res.render('landing', {});

	});

}
