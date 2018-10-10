var express = require('express');
var app = express();
var fs = require('fs');

// Best pratice to use enviroment variables
var port = process.env.PORT || 3002;

var apiController = require('./controllers/apiContorllers');

var htmlController = require('./controllers/htmlController');

// If static files are used express can handle it if we use it
app.use('/asserts',express.static(__dirname+'/public'));

//Consider this as filter in node term its called Middleware
app.use('/',function(req,res,next){
    console.log('Request URL:'+req.url);
    next();
});

// When app.set is used this enables template engine. Express will look for the folder views with app. files
app.set('view engine', 'ejs')


apiController(app);
htmlController(app);
app.listen(port);