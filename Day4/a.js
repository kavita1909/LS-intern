
// let result =
// "Is '123' NaN? " + isNaN('123') + "<br>" +
// "Is 'Hello' NaN? " + isNaN('Hello') + "<br>" +
// "Is '2005/12' NaN? " + isNaN('12+13');
// console.log(result);

// let result =
// "Is 123 NaN? " + isNaN(123) + "<br>" +
// "Is -1.23 NaN? " + isNaN(-1.23) + "<br>" +
// "Is 5-2 NaN? " + isNaN("5-2") + "<br>" +
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

let text = " My name is Kavita. my friend's name is kiran. he is a idiot";
restricted = ["idiot", "rascal", "nonsense"];
goodWord = [ { word:"kiran", newWord:"Totan"} ];
let i, j;
for (i=0; i<restricted.length; i++) {
    text = text.replaceAll(restricted[i], "")
}
for (j=0; j<goodWord.length; j++) {
    text = text.replaceAll(goodWord[j].word, goodWord[j].newWord);
}
console.log(text);