function greet(callback){
    console.log("Hello!");
    var data = {
        name : "Jone Doe"
    };
    callback(data);
}


greet(function(data){
    console.log("callled by greet");
    console.log(data);
})

greet(function(){
    console.log("callled by greet with out data");
})