var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname+'/index.htm','utf8');
    var message = 'Dinesh Elumalai';
    html = html.replace('{message}',message);
    res.end(html);
    
}).listen(1338,'127.0.0.1');