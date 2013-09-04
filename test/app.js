var assert = require('assert')
	, http = require('http')
	, app = require('../.')

var server;

before(function (done) {
	server = http.createServer(app).listen(3000, function () {  done() });
});

describe('given the app is running', function () {

	describe('when a request is made with "?_escaped_fragment_" in the originalUrl', function (done) {

		it('then should return us a page', function (done) {
			this.timeout(30000);

			 var options = {
				url: 'http://localhost:'+app.get('port')+'/?_escaped_fragment_=/matches',
				hostname: 'localhost',
				port: app.get('port'),
				method: 'GET',
				path: '/?_escaped_fragment_=/matches',
				headers: {
						'Host': 'pingpong.manta.com'
				}
			};

			var req = http.request(options, function (res) {
				var data = '';
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					data = data + chunk;
				});
				res.on('end', function () {
					assert.equal(!data.match("Nate \"Balls of Fury\" Romano"), false);
					done();
				});
				res.on('error', function (err) {
					done(e);
				});
			});

			req.end();

		});

	})

});

after(function (done) {
	server.close(function () {
		done();
	});
});
