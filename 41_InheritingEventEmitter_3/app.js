'use strict';

var Greeter = require('./greeter');

var greettings = new Greeter();

greettings.on('greet',function(data){
    console.log('Someone sent a greet: '+ data);
})

greettings.greet('Dinesh');