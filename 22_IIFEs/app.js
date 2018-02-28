var firstname = "Jane";

// Immediately Invoke Function Expressions
(function (lastname){
    var firstname = "John";
    console.log(firstname);
    console.log(lastname);

}("Doe")); //passing parameter to the function

console.log(firstname);