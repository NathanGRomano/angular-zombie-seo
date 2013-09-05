/*
 * The porxy router
 */

var express = require('express')
  , router = new express.Router()
	, zombie = require('zombie')

/*
 * Our bindings
 */

router.get('*', proxy);

/*
 * This method will load the requested uri into zombie
 * and then take the generated content and deliever it back
 */

function proxy (req, res, next) {

	//only looking for these
	if (!req.originalUrl.match(/_escaped_fragment/)) return next();

	//compose the url and replace with what the browser is looing for
	var url = 'http://'+req.host+req.originalUrl;
	url = url.replace('?_escaped_fragment_=', '#');

	//ask zombie to visit it
	zombie.visit(url, {loadCSS:false, waitDuration:'1s'}, function (err, browser, status) {
		if (err) return next(err);
		res.end(browser.html());
	});

}

/*
 * export this middleware
 */

module.exports = router;
