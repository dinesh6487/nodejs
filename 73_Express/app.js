var express = require('express');
var app = express();

// Best pratice to use enviroment variables
var port = process.env.PORT || 3002;

// Sending html in response, express will take care of adding contect type to the headers
app.get('/',function(req,res){

    res.send('<html><title>Node Html</title><head></head><body><h1>Hello World!</h1></body></html>');
});

// Sending JSON to the response using json function and passing object
app.get('/api',function(req,res){
    res.json({fName:'Dinesh',lName:'Elumalai'})
});

// API for using request parameter
app.get('/Person/:id',function(req,res){

    res.send('<html><title>Node Html</title><head></head><body><h1>Hello Person '+ req.params.id +'</h1></body></html>');
});

app.listen(port);