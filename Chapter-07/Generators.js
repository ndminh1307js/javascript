/* GENERATORS */

// Generator Basis
// Definition
function* generatorFunc() { }

let generatorFn = function* () { };

// Object literal
let foo = {
  *generatorFn() { }
}

// class
class Foo {
  *generatorFn() { }
}

// static method
class Bar {
  static *generatorFn() { }
}

// ARROW FUNCTION CAN NOT BE USED AS GENERATOR FUNCTIONS

// invoked, return a generator object
function* generatorFn() { }
const g = generatorFn();

console.log(g); // generatorFn{<suspended>}
console.log(g.next); // f next() {[native code]}
console.log(g.next()); // {value: undefined, done: true}

// returned value
function* generatorFn() {
  return 'foo';
}

const g = generatorFn();

console.log(g.next()); // {value: "foo", done: true}

// generatorFn is only invoked after call next() method
function* generatorFn() {
  console.log('foo');
}

const g = generatorFn(); // -> nothing is printed
g.next(); // -> foo

// Generator objects implement the Iterable interface
function* generatorFn() { }

console.log(generatorFn);
console.log(generatorFn()[Symbol.iterator]);
const g = generatorFn();
console.log(g === g[Symbol.iterator]()); // -> true



// Interrupting Execution with 'yield'
function* generatorFn() {
  yield;
}

let generatorObj = generatorFn();

console.log(generatorObj.next()); // {value: undefined, done: false}
console.log(generatorObj.next()); // {value: undefined, done: true}

function* generatorFn() {
  yield 'foo';
  yield 'bar';
  return 'baz';
}

let g = generatorFn();

console.log(g.next());
console.log(g.next());
console.log(g.next());

// Using a Generator Object as an Iterable

function* nTimes(n) {
  while (n--) {
    yield;
  }
}

for (let _ of nTimes(3)) {
  console.log('foo');
}

// Using 'yield' for input & output
function* generatorFn(initial) {
  console.log(initial);
  console.log(yield);
  console.log(yield);
}

let g = generatorFn('foo');

console.log(g.next('baz'));
console.log(g.next('bar'));

function* generatorFn() {
  return yield 'foo';
}

let g = generatorFn();

console.log(g.next());
console.log(g.next('bar'));

function* generatorFn() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

let g = generatorFn();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* nTimes(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let i of nTimes(3)) {
  console.log(i);
}

// Populating arrays or implementing ranges
function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

for (const x of range(4, 7)) {
  console.log(x);
}

function* zeroes(n) {
  while (n--) {
    yield 0;
  }
}

console.log(Array.from(zeroes(8)));

// Yielding an Iterable
function* generatorFn() {
  yield* [1, 2, 3, 4];
}

for (let x of generatorFn()) {
  console.log(x);
}

// Using Generator as Default Iterator
class Foo {
  constructor(values) {
    this.values = values
  }

  *[Symbol.iterator]() {
    yield* this.values;
  }
}

let foo = new Foo([1, 2, 3]);
for (const val of foo) {
  console.log(val);
}

// Early Termination of Generators
function* generatorFn() { }

let g = generatorFn();

console.log(g);
console.log(g.next);
console.log(g.return);
console.log(g.throw);

// return
function* generatorFn() {
  yield* [1, 2, 3];
}

const g = generatorFn();

console.log(g);

for (let x of g) {
  if (x > 1) {
    g.return(4);
  }
  console.log(x);
}

console.log(g); // generatorFn {<closed>}

// throw
function* generatorFn() {
  yield* [1, 2, 3];
}

let g = generatorFn();

console.log(g);

try {
  for (let x of g) {
    if (x > 1) {
      g.throw('end');
    }
    console.log(x);
  }
} catch (err) {
  console.log(err);
}

console.log(g);

