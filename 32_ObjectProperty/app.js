//Objects and how to access them

var obj = {
    greet:'Hello'
};

console.log(obj.greet); // By using dot and property name
console.log(obj['greet']); // By passing the property name in a []
var prop = 'greet';
console.log(obj[prop]); // Assigning a variable and then passing in []
console.log(obj);

// Functions and Arrays

var arr = [];

arr.push(function(){
    console.log('array item 1')
})

arr.push(function(){
    console.log('array item 2')
})

arr.push(function(){
    console.log('array item 3')
})


arr.forEach(function(item){
    item();
})


arr.push("ABC")
console.log(arr);

arr.pop("ABC");
console.log(arr);