var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'test/plain'});
    res.end('Hello World');
    
}).listen(1337,'127.0.0.1');