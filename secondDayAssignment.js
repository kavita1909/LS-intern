PDF 9 : Javascript Objects

Javascript Objects, methods and properties.
Objects and variables and their differences.
Object properties and methods
Accessing object properties

var car = {model:"500", companyName:"honda", safety:600 }
console.log(car);
var key = "model"
var p = "safety"
var c = "companyName"
console.log(car[key], car[p], car[c])

Accessing object methods:

var bike = { name: "HONDA", color: "blue", model: "500cc",
    details:function() {
return this.name + " " + this.color + " " + this.model;
} };
console.log(bike.details());

When a Javascript variable is declared with a keyword "new", the the variable is created as an object.
ex : var x = new String();

PDF 10 : Javascript Functions

Javascript Functions:

function sum(a, b) {
    return a * b;
}
console.log(sum(4,3));

why Functions?
Javascript function syntax.
function invocation, function return
code hoe to use function :
(console.log("the temperature is " + toC(77) + " celcius"));
function toC(f) {
    return (5/9) * (f-32);
} 

PDF 11 : Javascript scope

local Javascript variables
global Javascript variables

var mobname = "samsung";
myfunction();
function myfunction(){
    console.log("The type of mobile name is " + mobname);
     }

automatically global
global variables in HTML
Function Arguments

PDF 12 : Javascript Events

Javascript Events
HTML Events
Event handling
common HTML Event
Event handlers
Javascript work with Events.

PDF 13 : Javascript strings

Javascript strings
string length
commonly used special characters
breaking long code lines

PDF 14 : Javascript strings and Objects

strings can be Objects
string methods and properties