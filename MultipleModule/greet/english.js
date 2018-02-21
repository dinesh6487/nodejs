var greetings = require('./greetings.json')

var greet = function(){
    console.log('Greet in english, '+greetings.en+'!');
};

module.exports = greet;