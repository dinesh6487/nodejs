var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'application/json'});
    var obj = {fName : 'Dinesh', lName:'Elumalai'};
    res.write(JSON.stringify(obj))
    
}).listen(1339,'127.0.0.1');