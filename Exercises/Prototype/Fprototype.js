/**F.prototype */

Changing Prototype

function Rabbit() { }

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats); // true

function Rabbit() { }

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats); // false

function Rabbit() { }

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
delete rabbit.eats;
console.log(rabbit.eats); // true

function Rabbit() { }

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
delete Rabbit.prototype.eats;
console.log(rabbit.eats); // undefined


// Create an object with the same constructor
function User(name) {
  this.name = name;
}

let user1 = new User('Jake');
let user2 = new user1.constructor('Matt');
console.log(user2);