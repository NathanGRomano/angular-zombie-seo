var assert = require('assert')
	, request = require('request')
	, http = require('http')
	, app = require('../.')

var server;

before(function (done) {
	server = http.createServer(app).listen(3000, function () {  done() });
});

describe('given the app is running', function () {

	describe('when a request is made with ?_escaped_fragment_ in the path', function () {

		it('then should return us a page', function (done) {
			this.timeout(30000);
			var options = {
				uri: 'http://localhost:'+app.get('port')+'/?_escaped_fragment_=/matches',
				headers: {
					'Host': 'pingpong.manta.com'
				}
			};
			request(options, function (err, res, body) {
				
				if (err) return done(err);
				assert.equal(!body.match("Nate \"Balls of Fury\" Romano"), false);
				done();

			});

		});

	})

});

after(function (done) {
	server.close(function () {
		done();
	});
});
