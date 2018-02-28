var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Hello from Greet3 Changed!!";

/*The output of greet3b.greet() will change since the 
require function retrun the cached greet3 object*/
var greet3b = require('./greet3');
greet3b.greet();

/*If you want dont want the module to be cached then 
instead of creating the object at module.exports  like 
'module.exports = new Greeting();' do like this
'module.exports = Greeting' and create the object here*/
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


/*Revealing Module Pattern, Exposing the properties that required, 
in this scenario the module only exposes the greet function greeting 
variable is hidden from view */
var greet5 = require('./greet5');
greet5.greet();
