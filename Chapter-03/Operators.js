// UNARY OPERATORS
// increment/decrement

// prefix

let age = 29;
++age;
console.log(age);

let age = 29;
--age;
console.log(age);

let age = 29;
let anotherAge = --age + 2;
console.log(age);
console.log(anotherAge);

let num1 = 2;
let num2 = 20;
let num3 = --num1 + num2;
let num4 = num1 + num2;
console.log(num3, num4);

// postfix
let age = 29;
age++;
console.log(age);

let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2;
let num4 = num1 + num2;
console.log(num3, num4);
console.log(num1-- + num2, num1 + num2);

let s1 = '2';
let s2 = 'z';
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  }
}

s1++;
s2++;
b++;
f--;
o--;

console.log(s1, s2, b, f, o); // -> 3 NaN 1 0.10000000000000009 -2

// UNARY PLUS, MINUS

let s1 = '01';
let s2 = '1.2';
let s3 = 'z';
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  }
}

s1 = +s1;
s2 = +s2;
s3 = +s3;
b = +b;
f = +f;
o = +o;

console.log(s1, s2, s3, b, f, o); // -> 1 1.2 NaN 0 1.1 -1

// BITWISE OPERATORS
// Bitwise NOT
let num1 = 25; // 0000 0000 0000 0000 0000 0000 0001 1001
let num2 = ~num1;
console.log(num2.toString(2)); // 1111 1111 1111 1111 1111 1111 1110 0110

// Bitwise AND
let result = 25 & 3;
console.log(result);

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001;
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011;
// ---------------------------------------------
//  1 = 0000 0000 0000 0000 0000 0000 0000 0001;

// Bitwise OR
let result = 25 | 3;
console.log(result);

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001;
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011;
// ---------------------------------------------
// 27 = 0000 0000 0000 0000 0000 0000 0001 1011;

// Bitwise OR
let result = 25 ^ 3;
console.log(result);

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001;
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011;
// ---------------------------------------------
// 27 = 0000 0000 0000 0000 0000 0000 0001 1010;

// Bitwise Left Shift
let oldValue = 2;
let newValue = oldValue << 5;
console.log(newValue);

// Bitwise Signed Right Shift
let oldValue = -64;
let newValue = oldValue >> 5;
console.log(newValue);

// Bitwise Unsigned Right Shift
let oldValue = 64;
let newValue = oldValue >> 5;
console.log(newValue);

// BOOLEAN OPERATORS

// Logical NOT
console.log(!false);
console.log(!'blue');
console.log(!0);
console.log(!NaN);
console.log(!'');
console.log(!12345);
console.log(!null);
console.log(!undefined);

// convert a value to boolean
console.log(!!false);
console.log(!!'blue');
console.log(!!0);
console.log(!!NaN);
console.log(!!'');
console.log(!!12345);
console.log(!!null);
console.log(!!undefined);

// Logical AND
let result = true && false; // -> false
let result2 = true && true; // -> true

// Logical OR
let result = true || false;

// MULTIPLICATIVE OPERATORS
// Multiply
let result = 34 * 2;
// Divide
let result = 1 / 3;
console.log(result);
// Modulus
let result = 10 % 3;
console.log(result);

// EXPONENTIATION OPERATOR
console.log(Math.pow(2, 3));
console.log(2 ** 3);
console.log(Math.pow(16, 0.5));
console.log(16 ** 0.5);

// ADDITIVE OPERATOR

console.log(5 + 5);
console.log(5 + '5');
console.log(1 + NaN);
console.log(Infinity + Infinity);
console.log(Infinity - Infinity);
console.log(-Infinity - Infinity);
console.log(+0 + 0);
console.log(-0 - 0);
console.log(-0 + 0);

// SUBTRACT OPERATOR

console.log(5 - 5);
console.log(5 - '5');
console.log(1 - NaN);
console.log(Infinity - Infinity);
console.log((-Infinity) - (- Infinity));
console.log(-Infinity - Infinity);
console.log(+0 - 0);
console.log(-0 - (- 0));
console.log(-0 - 0);


