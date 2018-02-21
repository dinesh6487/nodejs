var greetings = require('./greetings.json')

var greet = function(){
    console.log('Greet in spanish,', greetings.es+'!');
};

module.exports = greet;