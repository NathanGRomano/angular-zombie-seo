var assert = require('assert')
	, http = require('http')
	, app = require('../.')
	, test = require('../test.conf')

var server;

before(function (done) {
	server = http.createServer(app).listen(3000, function () {  done() });
});

describe('given the app is running', function () {

	describe('when a request is made with "?_escaped_fragment_" in the originalUrl', function (done) {

		it('then it should return us a page', function (done) {
			this.timeout(30000);

			var req = http.request(test.request, function (res) {
				var data = '';
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					data = data + chunk;
				});
				res.on('end', function () {
					assert.equal(test.check(data), true);
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
