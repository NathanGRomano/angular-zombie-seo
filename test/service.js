var assert = require('assert')
	, request = require('request')
	, app = require('../.')

describe('given the app is running', function () {

	describe('when a request is made with ?_escaped_fragment_ in the path', function () {

		it('then should return us a page', function (done) {

			request(app)
				.get('http://pingpong.manta.com/?_escaped_fragment_=/matches')
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	})

});
