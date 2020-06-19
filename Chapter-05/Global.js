/* SINGLETON BUILT-IN OBJECTS */

// The Global Object
// URI Encoding Methods
let uri = 'https:///www.wrox.com/illegal value.js#start';
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));

let encodedURI = 'https%3A%2F%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start';
console.log(decodeURI(encodedURI));
console.log(decodeURIComponent(encodedURI));

// The eval() method
eval('console.log("Hi")');
eval(`function sayHi() { console.log('Hi'); }`);
sayHi();

// The Window Object
let color = 'red';
function sayColor() {
  console.log('This window.color');
}
window.sayColor();
console.log(window.color);

let global = function () {
  return this;
}()

console.log(global);

// The Math Object
// properties
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.SQRT2);

// min() & max() methods
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));

// rounding methods
let num = 1.6;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log(Math.fround(num)); // return 32 bits floating point representation of the number

// random() method
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1)); // random 1 -> 10

function selectFrom(lowerValue, upperValue) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}

let num = selectFrom(2, 5);
console.log(num);

let colors = ['red', 'yellow', 'purple', 'violet', 'blue', 'orange', 'black'];
let color = colors[selectFrom(0, colors.length - 1)];
console.log(color);

// other methods
console.log(Math.abs(-1));
console.log(Math.exp(1));
console.log(Math.log(Math.E));
console.log(Math.pow(2, 3));
console.log(Math.sign(-5));
console.log(Math.sqrt(2));
console.log(Math.trunc(1.9));
console.log(Math.cbrt(8));
// sin, cos, tan, asin, acos, atan, ....