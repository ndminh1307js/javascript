/**ARROW FUNCTION */

let arrowSum = (a, b) => {
  return a + b;
};

let functionExpressSum = function (a, b) {
  return a + b;
}

let ints = [1, 2, 3];

console.log(ints.map(function (x) { return x + 1 }));
console.log(ints.map((x) => x + 1));

/**FUNCTION NAMES */

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 10));

let anotherSum = sum;
console.log(anotherSum(10, 10));

sum = null;
console.log(anotherSum(10, 10));

/**UNDERSTANDING ARGUMENTS */

function sayHi(name, message) {
  console.log(`Hello ${name}, ${message}`);
}

function sayHello() {
  console.log(`Hello ${arguments[0]}, ${arguments[1]}`);
}

sayHi('Matt', "how's it going?");
sayHello('Matt', "how's it going?");

function howManyArgs() {
  console.log(arguments.length);
}

howManyArgs(1, 2, 3);
howManyArgs('Jake', 19, 'Software Engineer', [1, 2]);

// arguments in Arrow Function
function foo() {
  console.log(arguments[0]);
}

foo(5);

const bar = () => {
  console.log(arguments[0])
};

bar(5); // ReferenceError


/**NO OVERLOADING */
function addSumNumber(num) {
  return num + 10;
}

function addSumNumber(num) {
  return num + 20;
}

let result = addSumNumber(10);

console.log(result); // the second version invoked

/**DEFAULT PARAMETERS */

function makeKing(name = 'Henry') {
  return `King ${name} VII`;
}

console.log(makeKing());
console.log(makeKing('Arthur'));

// default params scope & temporal dead zone

// default parameters are initialized in the order
function makeQueen(name = 'Elizabeth', numerals = name) {
  console.log(`Queen ${name} ${numerals}`);
}

makeQueen(); //Queen Elizabeth Elizabeth

/**SPREAD ARGUMENTS & REST PARAMETERS */

// Spread Arguments
let values = [1, 2, 3, 4];

function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }

  return sum;
}

console.log(getSum.apply(null, values));

// using spread operator
console.log(getSum(...values));
console.log(getSum(-1, ...values));
console.log(getSum(...values, ...[5, 6, 7]));

// Rest Parameters
function ignoreFirst(firstValue, ...values) {
  console.log(values);
}

console.log(ignoreFirst(1, 2, 3, 4));

/**FUNCTION DECLARATIONS versus FUNCTION EXPRESSIONS */

// declaration
let sum = getSum(1, 2, 3); // OK
function getSum() {
  return [...arguments].reduce((sum, cur) => sum += cur, 0);
}

// expression
let sum = getSum(1, 2, 3); // Error
const getSum = function () {
  return [...arguments].reduce((sum, cur) => sum += cur, 0);
}

/**FUNCTIONS AS VALUES */
function callSomeFunction(someFunction, someArgument) {
  return someFunction(someArgument);
}

function add10(num) {
  return num + 10;
}

let result1 = callSomeFunction(add10, 10);
console.log(result1);

function greeting(name) {
  return `Hello ${name}`;
}

let result2 = callSomeFunction(greeting, 'Matt');
console.log(result2);

function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName],
      value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

let data = [
  { name: 'Zed', age: 20 },
  { name: 'Gross', age: 48 }
];

data.sort(createComparisonFunction('name'));
console.log(data);
data.sort(createComparisonFunction('age'));
console.log(data);

/**FUNCTION INTERNALS */

// arguments

// this
// Using in a standard function
window.color = 'red';
let o = {
  color: 'blue'
}

function sayColor() {
  console.log(this.color);
}

sayColor(); // red

o.sayColor = sayColor;
o.sayColor(); // blue

// Using in an arrow function

// this references the context which the arrow function is defined
window.color = 'red';
let o = {
  color: 'blue'
}

const sayColor = () => {
  console.log(this.color);
}

sayColor(); // red

o.sayColor = sayColor;
o.sayColor(); // red


function King() {
  this.royaltyName = 'Henry';
  setTimeout(() => console.log(this.royaltyName), 100);
}

function Queen() {
  this.royaltyName = 'Elizabeth';
  setTimeout(function () { console.log(this.royaltyName) }, 100);
}

new King(); // Henry
new Queen(); // undefined

// caller

// new.target

function King() {
  if (!new.target) {
    throw new Error('King must be instantiated using "new"');
  }

  console.log('King instance is instantiated');
}

new King();
King(); // Error

/**FUNCTION PROPERTIES & METHODS */

// length
function sayName(name1, name2, name3) {
  console.log([...arguments]);
}

console.log(sayName.length); // returns the number of NAMED arguments

// prototype

// apply() method

function sum(num1, num2) {
  return num1 + num2;
}

function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));

// call() method
function callSum3(num1, num2) {
  return sum.call(this, num1, num2);
}

console.log(callSum3(10, 10));

// bind() method
window.color = 'red';

let o = {
  color: 'blue'
}

function sayColor() {
  console.log(this.color);
}

let sayColorInObject = sayColor.bind(o);
sayColorInObject(); // blue

/**FUNCTION EXPRESSIONS */

/**RECURSION */

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));