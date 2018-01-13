
var utils = require('util');

var Eventemitter = require('events');


function Person() {
    this.name = 'Vagish';
}

Person.prototype.test = function (arams) {
    console.log('testtttt')
}
function Itengg() {
    // Person.apply(this);
    this.empId = '1231'
}
utils.inherits(Itengg, Eventemitter)

Itengg.prototype.info = function() {
    console.log(` ${this.name}  employeeID ${this.empId}`);
}

//Itengg.prototype  = Object.create(Person.prototype);
// utils.inherits(Itengg , Person);
var emp = new Itengg()



emp.info()