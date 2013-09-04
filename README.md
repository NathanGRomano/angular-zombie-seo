# Angular Zombie SEO

This service will accept the google or bing requests to your angular app and 
return the rendered page.

## Running the tests 

    npm test

There is a file test.conf.  This file is used by test/app.js to pull in the
configuration for the request and the assertion.

## Running the application (dev)

    PORT=3000 npm start

## Getting production ready

Running the node app as a service using an upstart script would be ideal.  If 
you are using nginx then you can add a rule to proxy crawlers to the service. 

## How this is app is organized

### server.js

When this file is started it will fork off an euqal number of children as
there are cpus on the system.  The child process actually loads up service.js.

### service.js

When this file is loaded and start() is called on the instance and http server
instance is created with "app.js" and the service is told to listen on the port.

### app.js

This file is where all the application components are organized into our
express application.  The routes are also mounted into the application as
middleware.

### routes/index.js

This file includes all the other route files and exports them.

### routes/proxy.js

This file contains the actually routes and they are attached to an express.Router()
instance that is exported.



