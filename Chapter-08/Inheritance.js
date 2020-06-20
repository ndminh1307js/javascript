/* INHERITANCE */

// Prototype Chaining
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subProperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subProperty;
}

let instance = new SubType();
console.log(instance.getSuperValue());

// Prototype and Instance Relationships
console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

// second way
console.log(Object.prototype.isPrototypeOf(instance));

// Working with Methods

function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subProperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

// new method
SubType.prototype.getSubValue = function () {
  return this.subProperty;
}

// override existing method
SubType.prototype.getSuperValue = function () {
  return false;
}

// // add new methods using object literal, this nullifies the previous line
// SubType.prototype = {
//   getSubValue() {
//     return this.subProperty;
//   },
//   someOtherMethod() {
//     return false;
//   }
// }

let instance = new SubType();
console.log(instance.getSuperValue()); // false

// Constructor Stealing

function SuperType() {
  this.colors = ['red', 'green', 'blue'];
}

function SubType() {
  // inherit from SuperType
  SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);

// passing argument

function SuperType(name) {
  this.name = name;
}

function SubType(name, age) {
  // inherit from SuperType
  SuperType.call(this, name);
  this.age = age;
}

let instance1 = new SubType('Marco', 24);
console.log(instance1);

// Combination Inheritance
// = Prototype Chaining + Constructor Stealing
function SuperType(name) {
  this.name = name;
  this.games = ['Until Dawn', 'The Last Of Us'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  // inherit properties
  SuperType.call(this, name);
  this.age = age;
}

// inherit methods
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

let instance1 = new SubType('Ed Sheeran', 34);
instance1.games.push('Final Fantasy VII');
console.log(instance1.games);
instance1.sayAge();
instance1.sayName();

// Prototypal Inheritance
let person = {
  name: 'Matt',
  friends: ['Mike', 'Emily', 'Jess']
};

let anotherPerson = Object.create(person);
console.log(anotherPerson);

// Parasitic Inheritance
// Parasitic Combination Inheritance