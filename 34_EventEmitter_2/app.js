var Emitter = require('events');

//Creating a config file will help in maintaining the events
var eventConfig = require('./config').events;

var emter = new Emitter();

emter.on(eventConfig.GREET,function(){
    console.log('Event emitter on for greet 1')
});

emter.on(eventConfig.GREET,function(){
    console.log('Event emitter on for greet 2')
});


emter.emit(eventConfig.GREET);