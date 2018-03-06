var obj = {
    name : 'Dinesh Kumar',
    greet : function(){
        console.log(`Hello ${this.name}`)
    }
}

obj.greet();
// Call an apply can be used to override the this keyword as shown
// below this.name is now be overridden. 
// Difference between them is .call(this,param1,param2) .apply(this,[param1,param2])
obj.greet.call({name:'Dinesh Elumalai'});
obj.greet.apply({name:'EDK'})

