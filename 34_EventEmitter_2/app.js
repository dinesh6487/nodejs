var Emitter = require('events');

var emter = new Emitter();

emter.on('greet',function(){
    console.log('Event emitter on for greet 1')
});

emter.on('greet',function(){
    console.log('Event emitter on for greet 2')
});


emter.emit('greet');