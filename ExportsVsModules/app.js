/* This will output 
    [Function: exports]
    {}
   hence greet.greet() will throw an error. This is coz exports object is equated
   ie exports = function(){ console.log('Hello from Greet.js');}
   To avoid this exports must always be mutated
   ie exports.greet = function(){console.log('Hello from Greet1.js');}
   This will return
    { greet: [Function] }
    { greet: [Function] } 
 */
var greet = require('./greet');

var greet = require('./greet1').greet();
