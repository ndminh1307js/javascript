/**PROTOTYPE METHODS */

// Add toString to the dictionary
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(',');
    }
  }
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary);

// The difference between calls
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Ted');

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();