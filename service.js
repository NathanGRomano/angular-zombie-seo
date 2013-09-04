var http = require('http')
  , app = require('./app');

exports.start = function () {
	return http.createServer(app).listen(3000, function () { console.log('running on port ' + app.get('port')) });
};
