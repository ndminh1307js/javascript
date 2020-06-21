/* CLASSES */


// Class Definition Basic
// class declaration
class Person { }

// expression
const Animal = class { };

// Class composition
class Foo { }

class Bar {
  constructor() { }
}

class Baz {
  get myBaz() { }
}

class Qux {
  static qux() { }
}



// The Class Constructor
class Animal { }

class Person {
  constructor() {
    console.log('Person constructor invoked');
  }
}

class Vegetable {
  constructor() {
    this.color = 'orange';
  }
}

let a = new Animal();

let p = new Person();

let v = new Vegetable();
console.log(v.color);

// using parameters
class Person {
  constructor(name) {
    console.log([...arguments]);
    this.name = name || null;
  }
}

let p1 = new Person;
console.log(p1.name);
let p2 = new Person();
console.log(p2.name);
let p3 = new Person('Matt');
console.log(p3.name);

// function constructor vs class constructor
function Person() { }
class Animal { };
let p = Person();
// let a = Animal(); // TypError

// constructor behaves as a regular instance method
class Person { };

let p1 = new Person();
// p1.constructor(); // TypeError
let p2 = new p1.constructor();

// Understanding Classes as Special Functions
class Person { };
console.log(Person);
console.log(typeof Person); // function

let p = new Person();
console.log(p instanceof Person);



// Instance, Prototype & Class Members
class Person {
  constructor() {
    this.name = new String('Jack');
    this.sayName = () => console.log(this.name);
    this.nicknames = ['Jake', 'Jay'];
  }
}

let p1 = new Person(), p2 = new Person();
p1.sayName();
p2.sayName();

console.log(p1.name === p2.name);
console.log(p1.sayName === p2.sayName);
console.log(p1.nicknames === p2.nicknames);

p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];

p1.sayName();
p2.sayName();

// Prototype Methods and Accessors
class Person {
  constructor(name) {
    this.name = name || null;
  }

  locate() {
    console.log('prototype');
  }
}

let p = new Person('Jake');
p.locate();
Person.prototype.locate();

const symbolKey = Symbol('symbolKey');

class Person {
  stringKey() {
    console.log('invoked stringKey');
  }

  [symbolKey]() {
    console.log('invoked symbolKey');
  }

  ['compute' + 'Key']() {
    console.log('invoked computeKey');
  }
}

let p = new Person();

p.stringKey();
p[symbolKey]();
p.computeKey();

// Static class methods & Accessors

class Person {
  constructor(name) {
    this.name = name;
  }

  locate() {
    console.log('locate', this);
  }

  static locate() {
    console.log('class', this);
  }
}

let p = new Person('Matt');
p.locate();
Person.locate();

// static class methods as useful as instance factories
class Person {
  constructor(age) {
    this.age = age;
  }

  sayAge() {
    console.log(this.age);
  }

  static create() {
    return new Person(Math.floor(Math.random() * 100 + 1));
  }
}

console.log(Person.create());

// Non-Function Prototype and Class Members
class Person {
  sayName() {
    console.log(`${Person.greeting} ${this.name}`);
  }
}

Person.greeting = 'My name is';
Person.prototype.name = 'Adam';

let p = new Person();
p.sayName();
let p1 = new Person();
p1.name = 'Jack';
p.sayName();
p1.sayName();

// Iterators and Generator Methods
class Person {
  // define generator on prototype
  *createNicknameIterator() {
    yield 'Jack';
    yield 'Jake';
    yield 'Jayz';
  }

  // define generator on class
  static *createJobIterator() {
    yield 'Bar Tender';
    yield 'Software Developer';
    yield 'Mechanical Engineer';
  }
}

let jobIter = Person.createJobIterator();
console.log(jobIter.next().value);
console.log(jobIter.next().value);
console.log(jobIter.next().value);

let p = new Person();

let nicknameIter = p.createNicknameIterator();
console.log(nicknameIter.next().value);
console.log(nicknameIter.next().value);
console.log(nicknameIter.next().value);

// class instance iterable
class Person {
  constructor(nicknames) {
    this.nicknames = nicknames;
  }

  *[Symbol.iterator]() {
    yield* this.nicknames;
  }
}

let p = new Person(['Josh', 'Joshua', 'Joe']);
for (const nickname of p) {
  console.log(nickname);
}



// Inheritance
// Basics
class Vehicle {
  identifyPrototype(id) {
    console.log(id, this);
  }

  static identifyClass(id) {
    console.log(id, this);
  }
}

class Bus extends Vehicle { }

let v = new Vehicle();
let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

b.identifyPrototype('bus');
v.identifyPrototype('vehicle');

Bus.identifyClass('bus');
Vehicle.identifyClass('vehicle');

// Constructors, HomeObjects and Super
class Animal {
  constructor() {
    this.hasLegs = true;
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log(this);
  }
}

let dog = new Dog();

// Abstract Base Classes

class Animal {
  constructor() {
    console.log(new.target);
    if (new.target === Animal) {
      throw new TypeError('Class Animal is only used as an abstract base class');
    }

    if (!this.foo) {
      throw new TypeError('Inheriting class must foo()');
    }

    console.log('Success');
  }
}

class Dog extends Animal {
  foo() {
    console.log('foo');
  }
}

let dog = new Dog();
// let animal = new Animal(); // TypeError

// Inheriting from Built-In Types
class SuperArray extends Array {
  shuffle() {
    // Fisher-Yates shuffle
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  }
}

const sArr = new SuperArray(1, 2, 3, 4, 5);
console.log(sArr);
sArr.shuffle();
console.log(sArr);