var person = {
    firstName: '',
    lastName:'',
    greet: function(){
        console.log(this.firstName+' '+this.lastName);
    }
}

var dinesh = Object.create(person);
dinesh.firstName = 'Dinesh';
dinesh.lastName = 'Elumalai';
dinesh.middleName= 'Kumar';
dinesh.greet();
dinesh.__proto__.firstName = 'Test';
console.log(dinesh);

var karthik = Object.create(dinesh);

karthik.__proto__.__proto__.lastName = 'Temp';

var aone = Object.create(person);


console.log('');