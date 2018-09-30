
var fs = require('fs');

var readable = fs.createReadStream(__dirname+'/contents.txt' ,
{encoding : 'utf8' , highWaterMark : 8*1024}); // This function is used to created the file in a stream highwatermark is used to split the files into chunks

var writeable = fs.createWriteStream(__dirname+'/contentsCopy.txt'); // This function is used to write the contents into the file 

readable.on('data',function(chunk){
    console.log(chunk.length); 
    writeable.write(chunk);
})
