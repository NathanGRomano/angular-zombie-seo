var assert = require('assert')
  , request = require('supertest')
	, app = require('../.')

describe('given the app is running', function () {

	describe('when a request is made with ?_escaped_fragment_ in the path', function (done) {

		it('then should return us a page', function (done) {

			request(app)
				.get('/test?_escaped_fragment_=/route')
				.status(200)
				.done(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	})

});
