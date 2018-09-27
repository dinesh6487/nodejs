var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello this is from function constructor property greeting';
}
//This is inhert all the properties of Eventemitter to Greetr
//So I can use the emit and on functions in Grettr function as shown below
util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greetr1 = new Greetr();

greetr1.on('greet',function(){
    console.log('someone emitted greet');
})

greetr1.greet();

//Emitting with data
Greetr.prototype.greetData = function(data){
    console.log(this.greeting +' Data:'+data);
    this.emit('greetData',data);
}

var greetr2 = new Greetr();

greetr2.on('greetData',function(data){
    console.log('Someone emitted with data :'+data);
})

greetr2.on('greet',function(){
    console.log('Someone emitted great again!')
})

greetr2.greetData('Test');
greetr2.greet();