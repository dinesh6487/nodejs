var express = require('express');
var app = express();
var fs = require('fs');
var cookieParser = require('cookie-parser');

// Best pratice to use enviroment variables
var port = process.env.PORT || 3001;

// If static files are used express can handle it if we use it
app.use('/asserts',express.static(__dirname+'/public'));

//Consider this as filter in node term its called Middleware
app.use('/',function(req,res,next){
    console.log('Request URL:'+req.url);
    next();
});

// This is an exmaple of a middleware
app.use(cookieParser());

// Sending html in response, express will take care of adding contect type to the headers
app.get('/',function(req,res){
    console.log(req.cookies);
    var html = fs.readFileSync(__dirname+'/index.htm','utf8');
    res.send(html);
});

// Sending JSON to the response using json function and passing object
app.get('/api',function(req,res){
    console.log('Cookie1: '+req.cookies);
    res.json({fName:'Dinesh',lName:'Elumalai'})
});

// API for using request parameter
app.get('/Person/:id',function(req,res){
    console.log('Cookie2: '+req.cookies);
    res.send('<html><title>Node Html</title><head></head><body><h1>Hello Person '+ req.params.id +'</h1></body></html>');
});

app.listen(port);