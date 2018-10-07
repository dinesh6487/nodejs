var express = require('express');
var app = express();
var fs = require('fs');

// Best pratice to use enviroment variables
var port = process.env.PORT || 3002;

// If static files are used express can handle it if we use it
app.use('/asserts',express.static(__dirname+'/public'));

//Consider this as filter in node term its called Middleware
app.use('/',function(req,res,next){
    console.log('Request URL:'+req.url);
    next();
});

// When app.set is used this enables template engine. Express will look for the folder views with app. files
app.set('view engine', 'ejs')

// Sending html in response, express will take care of adding contect type to the headers
app.get('/',function(req,res){
    res.render('index')
});

// Sending JSON to the response using json function and passing object
app.get('/api',function(req,res){
    res.json({fName:'Dinesh',lName:'Elumalai'})
});

// API for using request parameter
app.get('/Person/:id',function(req,res){
    res.render('person',{ID:req.params.id})
});

app.listen(port);