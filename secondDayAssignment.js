PDF 9 : Javascript Objects

Javascript Objects, methods and properties.
Objects and variables and their differences.
Object properties and methods
Accessing object properties
Accessing object methods:

var bike = { name: "HONDA", color: "blue", model: "500cc",
    details:function() {
return this.name + " " + this.color + " " + this.model;
} };
console.log(bike.details());

When a Javascript variable is declared with a keyword "new", the the variable is created as an object.
ex : var x = new String();