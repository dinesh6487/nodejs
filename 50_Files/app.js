var fs = require('fs');

var content = fs.readFileSync(__dirname + '/text.txt');

console.log(content); // This will return a buffer with a synchronous call

content = fs.readFileSync(__dirname + '/text.txt','utf8');

console.log(content); // This will return a contents synchronous call

var async = fs.readFile(__dirname + '/text.txt','utf8',callback); // This is read the file Asynchronously and call the callback function

function callback(err,data){
    console.log('Data from file: '+data);
};

console.log('Done!');
