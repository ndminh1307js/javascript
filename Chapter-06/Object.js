/* THE OBJECT TYPE */
// creating an instance of object
// using Object constructor
let person1 = new Object();
person1.name = 'Matthew';
person1.age = 29;
console.log(person1);

// using object literal
let person2 = {
  name: 'Michael',
  age: 30
};

console.log(person2);

// access value through key
console.log(person2['name']); // bracket notation
console.log(person2.name); // dot notation

// access value throught variable
let firstName = 'name';
console.log(person2[firstName]);


