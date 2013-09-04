var http = require('http')
  , app = require('./app');
http.createServer(app).listen(3000, function () { console.log('running on port' + app.get('port')) });
