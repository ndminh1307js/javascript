//***The 'var' keyword***
var message = 'hi';
message = 100;

// var Declaration Scope
function test() {
	var message = 'hi'; //local variable
}

test();
console.log(message);

function test() {
	message = 'hi'; //global variable
}
test();
console.log(message);

var message = 'hi',
	found = false,
	age = 29;

// var Declaration hoisting
function foo() {
	console.log(age);
	var age = 26; // hoisting to the top of the function scope
}

foo();

// var allows redundant declaration
function foo() {
	var age = 16;
	var age = 26;
	var age = 18;
	console.log(age);
}

foo();

// ***'let' Declaration***

// let is block scoped, but var is function scoped
if (true) {
	var name = 'Matt';
	console.log(name);
}
console.log(name); // -> Matt

if (true) {
	let age = 16;
	console.log(age);
}

console.log(age); // -> ReferenceError

// let does not allow redundant declaration
var name;
var name;

let age;
let age; // -> SyntaxError

var name;
let name; // -> SyntaxError

let age;
var age; // -> SyntaxError

// Temporal Dead Zone

// name is hoisted
console.log(name);
var name = 'Adam';

// age is not hoisted
console.log(age);
let age = 19;

// Global Declaration
var name = 'Matt';
console.log(window.name);

let age = 19;
console.log(window.age); // -> undefined

// let Declaration in For loops

for (var i = 0; i < 5; ++i) {}

console.log(i); // -> 5

for (let j = 0; j < 5; ++j) {}

console.log(j); // -> ReferenceError

for (var i = 0; i < 5; ++i) {
	setTimeout(() => console.log(i), 0);
}
// -> 5 5 5 5 5

for (let j = 0; j < 5; ++j) {
	setTimeout(() => console.log(j), 0);
}

// -> 0 1 2 3 4

// ***'const' Declaration***

// const must be initialized with a value
const age = 26;
age = 18; // -> TypeError

// const still disallows redundant declaration
const name = 'Matt';
const name = 'Nicholas'; // -> SyntaxError

// const is still scoped to blocks
if (true) {
	const thisIsConstVar = 'Nicholas';
}

console.log(thisIsConstVar); // -> SyntaxError

const person = {};
person.name = 'Matt'; // ok

let i = 0;
for (const j = 7; i < 5; i++) {
	console.log(j);
}

// 7 7 7 7 7

for (const key in { a: 1, b: 2 }) {
	console.log(key);
}

// a b

for (const value of [0, 1, 2, 3, 4]) {
	console.log(value);
}

// 0 1 2 3 4
