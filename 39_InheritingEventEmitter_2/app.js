var util = require('util');

function Person(){
    this.firstName = "Dinesh";
    this.lastName = "Elumalai";
}

Person.prototype.greet= function(){
 console.log('Hello '+this.firstName+ ' '+ this.lastName);
};

function PoliceMan(){
    //When Person.call(this) is not made officer will have undefined fName and lName. Consider this as super(this) in java
    Person.call(this);
    this.badgeNumber = "12345";
}

util.inherits(PoliceMan,Person);

var officer = new PoliceMan();

officer.greet();