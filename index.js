const express = require('express'); //node has support from common js modules.
//using import statements is a feature of es2015, not node at the moment. so, our backend must use require, the front with react can use import
const app = express(); //generates a new application that represents a running express app

//create route handler and associate with given route
app.get('/', (req, res) => { //get: watch for incoming response. '/' looks for requests trying to access address '/'. req and res are request and response.
    res.send({ bye: 'buddy' }); //send some json data back to whoever made the request
});

const PORT = process.env.PORT || 5000; //heroku will inject environment variables in the underlying node runtime. it can pass us runtime configuration
app.listen(PORT); //if there is not a PORT environment variable declared, use 5000