/* THE BOOLEAN TYPE */
let booleanObject = new Boolean(false);
console.log(typeof booleanObject); // -> object
let b = true; // -> boolean
console.log(typeof b);

let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // -> true

let falseValue = false;
let result2 = falseValue && true;
console.log(result2); // -> false

