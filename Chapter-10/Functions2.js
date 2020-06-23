/**CLOSURE */
// The this object
window.identity = 'The Window';

let object = {
  identity: 'My object',
  getIdentityFunc() {
    let that = this;
    return function () {
      return that.identity;
    }
  }
}

console.log(object.getIdentityFunc()()); // The window

// the value of this may not end up as you want
window.identity = 'The Window';

let object = {
  identity: 'My Object',
  getIdentityFunc() {
    return this.identity;
  }
};

console.log(object.getIdentityFunc());
console.log((object.getIdentityFunc)());
console.log((object.getIdentityFunc = object.getIdentityFunc)()); // The window

/**IMMEDIATELY INVOKED FUNCTION EXPRESSIONS */
// basic syntax
(function () {
  // code goes here
})();

//IIFE

(function () {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
})();

// console.log(i); // ReferenceError

/**PRIVATE VARIABLES */
function MyObject() {
  let privateVariable = 10;

  function privateFunction() {
    return false;
  }

  this.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  }
}


function Person(name) {
  this.getName = function () {
    return name;
  }

  this.setName = function (value) {
    name = value;
  }
}

let person = new Person('Jason Todd');
console.log(person.getName());
person.setName('Bruce Wayne');
console.log(person.getName());

// static private variables
(function () {
  let name = '';

  Person = function (value) {
    name = value;
  };

  Person.prototype.getName = function () {
    return name;
  }

  Person.prototype.setName = function (value) {
    name = value;
  }
})();

let person1 = new Person('Matt');
console.log(person1.getName());
person1.setName('Jack');
console.log(person1.getName());

let person2 = new Person('Micheal');
console.log(person1.getName(), person2.getName());

// share among instances

// The Module Pattern

let singleton = function () {
  let privateVariable = 10;

  function privateFunc() {
    return false;
  }

  return {
    publicProperty: true,
    publicMethod() {
      privateVariable++;
      return privateFunc();
    }
  }
}