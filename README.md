# Angular Zombie SEO

This service will accept the google or bing requests to your angular app and 
return the rendered page.

## Running the tests 

    npm test

## Running the application (dev)

    PORT=3000 npm start

## Getting production ready

Running the node app as a service using an upstart script would be ideal.  If 
you are using nginx then you can add a rule to proxy crawlers to the service. 



