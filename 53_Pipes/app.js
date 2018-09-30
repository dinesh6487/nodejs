
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname+'/contents.txt' ,
{encoding : 'utf8' , highWaterMark : 8*1024}); // This function is used to created the file in a stream highwatermark is used to split the files into chunks

var writeable = fs.createWriteStream(__dirname+'/contentsCopy.txt'); // This function is used to write the contents into the file 

var compressed = fs.createWriteStream(__dirname+'/contentsCopy.txt.gz'); 

var gZip = zlib.createGzip();

readable.pipe(writeable); // This pipe function will read the file stream and write the contents into a file

readable.pipe(gZip).pipe(compressed); // This line will read the file write it into gZip util which is duplex stream read it again and write it into gz file
