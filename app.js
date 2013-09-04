/*
 * Modules
 */

var express = require('express')
  , routes = require('./routes')

/*
 * Our express app
 */

var app = express();

/*
 * Configure the app
 */

app.configure(function () {
	if (process.env.NODE_ENV != 'test') app.use(express.logger('dev'));
	app.set('port', process.env.PORT || 3000);
	app.use(routes.proxy.middleware);

});

app.configure('development', function () {
	app.use(express.errorHandler());
});

/*
 * export the app
 */

module.exports = app;
