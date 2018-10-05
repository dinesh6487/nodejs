var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.htm','utf8').pipe(res);
    }
    else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type':'application/json'});
    var obj = {fName : 'Dinesh', lName:'Elumalai'};
    res.write(JSON.stringify(obj))
    }else{

    res.writeHead(404);
    res.end();
    }
    
}).listen(1339,'127.0.0.1');