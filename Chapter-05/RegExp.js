/* THE REGEX TYPE */

// Match all instances of 'at' in a string
let pattern1 = /at/g;
// Match the first instance of 'bat' or 'cat', regardless of case
let pattern2 = /[bc]at/i;

// Match the first instance of '[bc]cat', regardless of case
let pattern3 = /\[bc\]at/i;

// Match all three-character combinations ending with 'at', regardless of case
let pattern4 = /.at/gi;

// Match all instances of '.at', regardless of case
let pattern5 = /\.at/gi;

// using the constructor
let pattern = new RegExp('[bc]at', 'gi');

// RegExp instance properties
let pattern1 = /[bc]at/i;

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);
console.log(pattern1.flags);

// RegExp instance methods

let text = 'mom and dad and baby';
let pattern = /mom( and dad( and baby)?)?/gi;

let match = pattern.exec(text);
console.log(match.index);
console.log(match[0]);
console.log(match[1]);
console.log(match[2]);
console.log(match);

console.log(pattern.test(text));
console.log(/[bc]at/gi.test('bat cat'));

