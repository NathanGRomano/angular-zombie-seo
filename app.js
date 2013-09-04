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
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(routes.proxy.middleware);

});

app.configure('development', function () {
	app.use(express.errorHandler());
});

/*
 * export the app
 */

module.exports = app;
