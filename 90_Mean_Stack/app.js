var express = require('express');
var app = express();

// Best pratice to use enviroment variables
var port = process.env.PORT || 3000;

var people = [{name:'Dinesh'},{name:'Raju'},{name:'Elumalai'}];
app.use('/asserts',express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index', {serverPeople:people});
});

app.listen(port);