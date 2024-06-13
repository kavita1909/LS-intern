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