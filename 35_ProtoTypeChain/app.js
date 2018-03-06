var person = {
    firstName: '',
    lastName:'',
    sirName:'Mr.',
    greet: function(){
        console.log(this.firstName+' '+this.lastName);
    }
}

var dinesh = Object.create(person);
console.log(person);
dinesh.firstName = 'Dinesh';
dinesh.lastName = 'Elumalai';
dinesh.middleName= 'Kumar';
dinesh.greet();
dinesh.__proto__.firstName = 'Test';
console.log(dinesh);
console.log(person);

var karthik = Object.create(dinesh);
console.log(person);
karthik.__proto__.__proto__.lastName = 'Temp';

var aone = Object.create(person);
console.log(person);

console.log('');