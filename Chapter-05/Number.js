// /* THE NUMBER TYPE */
let num = new Number(10);
console.log(num);
console.log(typeof num); // -> object
console.log(typeof num.valueOf()); // -> number

let numVal = 10.49;
console.log(numVal);
console.log(typeof numVal); // -> number
console.log(numVal.toString());
console.log(numVal.toFixed(2));
console.log(numVal.toFixed(0));

let num = 100.5;
console.log(num.toExponential(1));
console.log(num.toExponential(2));

console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));

// isInteger & isSafeInteger
console.log(Number.isInteger(1));
console.log(Number.isInteger(1.00));

console.log(Number.isSafeInteger(-(2 ** 53))); // -> false, out of range
console.log(Number.isSafeInteger(2 ** 53)); // -> false, out of range
