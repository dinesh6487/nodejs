'use strict';

class Person{
    // This is the function constructor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // This will be added to the object prototype
    greet(){
        console.log('Hello '+this.firstName+ ' '+ this.lastName);
    }
}

var dinesh = new Person("Dinesh","Elumalai");
dinesh.greet();
