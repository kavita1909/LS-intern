
// let result =
// "Is '123' NaN? " + isNaN('123') + "   " +
// "Is 'Hello' NaN? " + isNaN('Hello') + "   " +
// "Is '2005/12' NaN? " + isNaN('12+13');
// console.log(result);

// let result =
// "Is 123 NaN? " + isNaN(123) + "   " +
// "Is -1.23 NaN? " + isNaN(-1.23) + "   " +
// "Is 5-2 NaN? " + isNaN("5-2") + "   " +
// "Is 0 NaN? " + isNaN(0);
// console.log(result);

// let x = 123;
// console.log(x.toString(), " ", (12345).toString(), " ", (123+6899).toString());

// let x = 9.56432;
// console.log(x.toExponential(), " ", x.toExponential(2), " ", x.toExponential(8))

// let x = 9.56482;
// console.log(x.toFixed(), " ", x.toFixed(3), " ", x.toFixed(60))

// let x = 9.56482;
// console.log(x.toPrecision(), " ", x.toPrecision(4), " ", x.toPrecision(3), " ", x.toPrecision(10))

// let x = 1234
// console.log(x.valueOf(), " ", (234576).valueOf())

// let text = " My name is Kavita. my friend's name is kiran. he is a idiot";
// restricted = ["idiot", "rascal", "nonsense"];
// goodWord = [ { word:"kiran", newWord:"Totan"} ];
// let i, j;
// for (i=0; i<restricted.length; i++) {
//     text = text.replaceAll(restricted[i], "")
// }
// for (j=0; j<goodWord.length; j++) {
//     text = text.replaceAll(goodWord[j].word, goodWord[j].newWord);
// }
// console.log(text);

// console.log(Number("1234") + "   " + 
// Number(false) + "   " + 
// Number(new Date()))

// console.log(parseInt("10") + "   " +
// parseInt("10.00") + "   " +
// parseFloat("10.33") + "   " +
// parseInt("34 45 66") + "   " +
// parseInt("   60   ") + "   " +
// parseInt("40 years") + "   " +
// parseInt("He was 40"))

// restricted = "idiot";
// console.log(Array.isArray(restricted));

// let array=[];
// array.length = 10;
// console.log(array.fill(2))

// Create an array with 10 elements, all filled with 0
// let arrayWithZeros = new Array(10).fill(0);

// console.log(arrayWithZeros);

// let arr = [ 1, 2, 3, 4]
// // arr.unshift(0)
// arr.splice(1, 2)
// console.log(arr)

let arr = [1, 2, 3];

console.log(arr instanceof Array);
console.log(arr instanceof Object); 
console.log(arr instanceof String);