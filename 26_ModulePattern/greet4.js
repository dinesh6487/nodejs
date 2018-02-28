//In this pattern a Object is created and set to module.exports.
function Greeting(){
    this.greeting = "Hello from Greet4!"
    this.greet = function(){
        console.log(this.greeting);
    };
};

module.exports = Greeting;