//Revealing Module Pattern, Exposing the properties that is required others are hidden
var greeting = 'Hello from Greet5!'

function greet(){
    console.log(greeting);
}

module.exports = {
    greet:greet
}