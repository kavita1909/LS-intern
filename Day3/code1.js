var str = "PLEASE do not touch the paintings";
var re = str.replace(/please/i, "kindly");
console.log(re);

var str = "PLEASE DO NOT TOUCH THE PAINTINGS";
console.log(str.toLowerCase());

var x = "HELLO INDIA";
console.log(x.charAt(8));

var x = "HELLO INDIA";
console.log(x.charCodeAt(9));

var x = "HELLOINDIA";
var y = x.split(",");
console.log(y)

var a = "kavita";
var b = "kumari";
console.log(a.concat(" ", b));


var company = "logic square";
var arr = company.split(" ");
f = arr[0]
s= arr[1]
first = arr[0].toUpperCase() + " " + arr[1][0].toUpperCase() + s.slice(1);
second = arr[0][0].toUpperCase() + f.slice(1) + " " + arr[1][0].toUpperCase() + s.slice(1);
third = arr[0][0] + arr[0].slice(1).toUpperCase() + " " + arr[1][0] + arr[1].slice(1).toUpperCase()
console.log(first)
console.log(second)
console.log(third)