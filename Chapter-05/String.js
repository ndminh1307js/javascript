/* THE STRING TYPE */
let stringObject = new String('hello world');

let stringValue = 'hello world';
console.log(stringValue.length);

// The Javascript character
let message = 'abcde';
console.log(message.length);
console.log(message.charAt(2));
console.log(message.charCodeAt(2)); // -> 99
// 99 -> 0x63 -> Unicode small letter C: U+0063

console.log(String.fromCharCode(99));
console.log(String.fromCharCode(0x63));

console.log(String.fromCharCode(97, 98, 99, 100, 101));
console.log(String.fromCodePoint());
console.log([...'abcde']);

// The normalize() method

// String-Manipulation methods
let stringVal = 'hello';
console.log(stringVal.concat(' world', '!'));

let s = 'hello world';
console.log(s.slice(1));
console.log(s.substring(3)); // (start, END)
console.log(s.substr(3)); // (from, LENGTH)

console.log(s.slice(1, 3));
console.log(s.substring(3, 7));
console.log(s.substr(3, 7));

// String location methods
let s = 'hello world';
console.log(s.indexOf('o'));
console.log(s.lastIndexOf('o'));
console.log(s.indexOf('o', 6));
console.log(s.lastIndexOf('o', 6));

// String Inclusion Methods
let message = 'foobarbaz';

console.log(message.startsWith('foo'));
console.log(message.endsWith('baz'));
console.log(message.includes('bar'));

// trim() method
let dirtyString = '   hello world     \n';
console.log(dirtyString);
console.log(dirtyString.trim());

// repeat() method
let string = 'batman';
console.log(string.repeat(5));

// padStart() & padEnd() methods
let string = 'batman';
console.log(string.padStart(9));
console.log(string.padStart(9, '.'));
console.log(string.padEnd(9));
console.log(string.padEnd(9, '.'));

// String iterators and destructuring
let message = 'abc';
let stringIterator = message[Symbol.iterator]();

console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next()); // -> {value: undefined, done: true}

for (const character of message) {
  console.log(character);
}

console.log([...message]);

// String Case Methods
let message = 'hEllo WoRld';
console.log(message.toLocaleLowerCase());
console.log(message.toLowerCase());
console.log(message.toLocaleUpperCase());
console.log(message.toUpperCase());

// String Pattern-Matching Methods
let text = 'bat, cat, sat, fat';
let pattern = /.at/gi;

// match
console.log(text.match(pattern));

// search
console.log(text.search(pattern));

// replace
console.log(text.replace(pattern, 'ok'));

// localCompare() method
let string = 'yellow';
console.log(string.localeCompare('brick')); // yellow comes after brick, 1
console.log(string.localeCompare('yellow')); // yellow = yellow, 0
console.log(string.localeCompare('zoo')); // yellow comes before zoo, -1 