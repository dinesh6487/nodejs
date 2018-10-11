var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('',{ useNewUrlParser: true });

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName:String, 
    lastName:String,
    address:String
});


var Person = mongoose.model('Person',personSchema);

var john = Person({
    firstName:'John',
    lastName:'Doe',
    address:'555 Main St'
})

john.save(function(err){
    if(err) throw err;

    console.log('Person Saved!');
})


var jane = Person({
    firstName:'Jane',
    lastName:'Doe',
    address:'555 Main St'
})

jane.save(function(err){
    if(err) throw err;

    console.log('Person Saved!');
})


Person.find({},function(err,users){
    if(err) throw err;

    console.log(users);
})