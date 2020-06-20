/* OBJECT CREATION */

// Factory Pattern
function createPerson(name, age, job) {
  let o = {
    name,
    age,
    job,
    sayName() {
      console.log(`Hello, ${this.name}`);
    }
  };
  return o;
}

let person1 = createPerson('Matt', 20, 'Software Engineer');
let person2 = createPerson('Mike', 21, 'Actor');

console.log(person1);
console.log(person2);

// Function Constructor Pattern
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(`Hello, ${this.name}`);
  }
}

const person3 = new Person('Emily', 19, 'Student');
console.log(person3);

// Constructors as Functions
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(`Hello, ${this.name}`);
  }
}
// use as a Constructor
let person = new Person('Matt', 27, 'Software Engineer');
person.sayName();

// use as a function
Person('Matt', 27, 'Software Engineer'); // adds to window object
window.sayName();

// call in the scope of another object
let o = new Object();
Person.call(o, 'Matt', 27, 'Software Engineer');
o.sayName();

// Prototype Pattern
function Person() {
}

Person.prototype.name = 'Thomas';
Person.prototype.age = 32;
Person.prototype.job = 'Front-end Developer';
Person.prototype.sayName = function () {
  console.log(this.name);
}

let person = new Person();
person.sayName();
console.log(person);
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(Person.prototype instanceof Object);
console.log(Person.prototype.isPrototypeOf(person)); // -> true

// Understanding the Prototype Hierarchy
function Person() { }

Person.prototype.name = 'Joel';
Person.prototype.age = 53;
Person.prototype.job = 'Drug Dealer';
Person.prototype.sayName = function () {
  console.log(this.name);
}

let person1 = new Person();
let person2 = new Person();

person1.name = 'Tommy';
console.log(person1.name); // Tommy - from instance
console.log(person2.name); // Joel - from prototype

delete person1.name;
console.log(person1.name); // Joel - from prototype

console.log(person1.hasOwnProperty('name')); // false

person1.name = 'Thomas';
console.log(person1.name); // Thomas - from instance
console.log(person1.hasOwnProperty('name'));

console.log(person2.hasOwnProperty('name'));

// in operator
console.log('name' in person1); // always true both from prototype and from instance

// check prototype
function hasPrototypeProperty(obj, property) {
  return !obj.hasOwnProperty(property) && property in obj;
}

let person = new Person();

console.log(hasPrototypeProperty(person, 'name'));

// Object Iteration
const game = {
  name: 'The Last Of Us',
  platform: 'PS',
  rating: 10,
  price: 30,
  details: {
    plotType: 'linear'
  },
  [Symbol('id')]: 123
};

// Symbol props are ignored
console.log(Object.keys(game));
console.log(Object.values(game));
console.log(Object.entries(game));

// Alternate prototype syntax
function Person() { }

Person.prototype = {
  constructor: Person,
  name: 'Matthew',
  age: 29,
  job: 'DevOps',
  sayName: function () {
    console.log(this.name);
  }
};

let friend = new Person();
console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor == Object);
console.log(friend.constructor == Person); // -> false

// restore the constructor
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
});

// Dynamic nature of prototypes
function Person() { }

let friend = new Person();

Person.prototype = {
  constructor: Person,
  name: 'Robert',
  age: 30,
  sayName() {
    console.log(this.name);
  }
};

friend.sayName(); // TypeError

// Problem with Prototype
function Person() { }

Person.prototype = {
  constructor: Person,
  name: 'Matt',
  age: 28,
  friends: ['Mike', 'Chris'],
  sayName() {
    console.log(this.name);
  }
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push('Jess');
console.log(person1.friends);
console.log(person2.friends);