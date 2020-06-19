// ***The typeof Operator***
let message = 'some string';
console.log(typeof message);
// console.log(typeof (message));
console.log(typeof 95);

*** The undefined Type ***
	let message;
console.log(message == undefined);
// console.log(age == undefined); // -> ReferenceError

console.log(typeof message);
console.log(typeof age);
// -> both are 'undefined'

// undefined is falsy
let message;

if (message) {
	// will not execute
}

if (!message) {
	// will execute
}

// ***The null Type***

let car = null;
console.log(car); // -> null
// null is empty object POINTER
console.log(typeof car); // -> object

console.log(null == undefined); // -> true
console.log(null === undefined); // -> false

// null type is falsy

let car = null;

if (car) {
	// not execute
}

if (!car) {
	// execute
}

// ***The boolean Type***

let found = true;
let lost = false;
console.log(true == 1);
console.log(false == 0);
console.log(1 + found);

let message = 'Hello World';
let messageAsBoolean = Boolean(message);
console.log(messageAsBoolean); // -> true
console.log(Boolean(null)); // -> false
console.log(Boolean(undefined)); // -> false
console.log(Boolean(0)); // -> false
console.log(Boolean('')); // -> false
console.log(Boolean({})); // -> true

// ***The Number Type***

// Intergers
let intNum = 55;

// octal
let octalNum1 = 070; // octal for 56
let octalNum2 = 079; // invalid octal - interpreted as 79
let octalNum3 = 08; // invalid octal - interpreted as 8

// hexadecimal
let hexNum1 = 0xa; // hexadecimal for 10
let hexNum2 = 0x1f; // hexadecimal for 31

// Floating-Point values
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // valid, but not recommended
// storing floating point values uses twice as much memory as storing  integer values

// let floatNum1 = 1.; // missing digit after decimal, interpreted as integer 1
let floatNum2 = 10.0; // whole number, interpreted as integer 10

let floatNum = 3.125e7; // as 3.125 x 10^7 -> 31250000

if (0.1 + 0.2 == 0.3) {
	console.log('You got 0.3'); // -> not execute because 0.1 + 0.2 = 0.30000000000000004
}
console.log(0.1 + 0.2);

// range of values
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(result);
console.log(isFinite(result)); // -> false

// NaN
console.log(NaN === NaN); // -> false

console.log(isNaN(NaN)); // -> true
console.log(isNaN(10)); // -> false
console.log(isNaN('10')); // can be converted to an integer, -> false
console.log(isNaN('blue')); // can not be converted to number, --> true
console.log(isNaN(true)); // can be converted to 1, --> false

// Number Conversions
let num1 = Number('some string'); // -> NaN
let num2 = Number(''); // -> 0
let num3 = Number('000011'); // -> 11
let num4 = Number(true); // -> 1

let num1 = parseInt('1234blue'); // -> 1234
let num2 = parseInt(''); // -> NaN
let num3 = parseInt('0xA'); // -> 10
let num4 = parseInt(22.5); // -> 2
let num5 = parseInt('70'); // -> 70
let num6 = parseInt('0xf'); // -> 16

let num1 = parseInt('10', 2); // -> 2, binary
let num2 = parseInt('10', 8); // -> 8, octal
let num3 = parseInt('10', 10); // -> 10, decimal
let num4 = parseInt('10', 16); // -> 16, hexadecimal

let num1 = parseFloat('1234blue'); // -> 1234
let num2 = parseFloat('0xa'); // -> 0
let num3 = parseFloat('22.5'); // -> 22.5
let num4 = parseFloat('33.32.5'); // -> 33.32
let num5 = parseFloat('0908.5'); // -> 908.5
let num6 = parseFloat('3.125e7'); // -> 31250000

// ***The String Type***

// let firstName = "John";
let lastName = 'Jacob';
let fullName = `Hannah Washington`;

// Character Literals
let text = 'This is the letter sigma: \u03a3.';
console.log(text);
console.log(text.length); // -> 27, returns the number of 16-bit characters in the string

// Nature of strings
let lang = 'Java';
lang = lang + 'Script';

creating a new string with enough 10 characters, fill Java and Script, then destroying Java and Script

// Converting to a String
let age = 11;
let ageAsString = age.toString(); // -> '11'
let found = true;
let foundAsString = found.toString(); // -> 'true'

let num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

console.log(String(null));
console.log(String(undefined));
console.log(String(10));
console.log(String(true));

// Template Literals
let myMultilineString = 'firstLine\nsecondLine';
let myMultilineTemplateLiteral = `firstLine
secondLine`;
console.log(myMultilineString);
console.log(myMultilineTemplateLiteral);
console.log(myMultilineString === myMultilineTemplateLiteral); // -> true

let pageHTML = `
  <div>
    <a href="#">
      <span>Jake</span>
    </a>
  </div>
`;

let myTemplateLiteral = `first line
                         second line`;
console.log(myTemplateLiteral.length); // 46
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === '\n'); // -> true
let thirdTemplateLiteral = `first line
second line`;
console.log(thirdTemplateLiteral);
console.log(thirdTemplateLiteral[0]);

// Interpolation
let value = 5;
let exponent = 'second';

// formerly, interpolation was accomplished as follows
let interpolatedString =
	value + ' to the ' + exponent + ' power is ' + value * value;
let interpolatedTemplateLiteral = `${value} to the ${exponent} power is: ${
	value ** 2
	}`;
console.log(interpolatedString);
console.log(interpolatedTemplateLiteral);
console.log(`Hello ${'World'}`);
let foo = { toString: () => 'World' };
console.log(`Hello ${foo}`);

function capitalize(word) {
	return `${word[0].toUpperCase()}${word.slice(1)}`;
}
console.log(`${capitalize('hello')} ${capitalize('world')}`);

let value = '';
function append() {
	value = `${value}abc`;
	console.log(value);
}

append();
append();
append();

// Template Literal Tag Functions
let a = 6;
let b = 9;

function simpleTag(strings, ...expressions) {
	return (
		strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join('')
	);
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
console.log(taggedResult);

// Raw Strings
// unicode demo
// \u00A9 is copyright symbol
console.log('\u00A9');
console.log(String.raw`\u00A9`);

// newline demo
console.log('first line\nsecond line');
console.log(String.raw`first line\nsecond line`);

// The Symbol Type

let sym = Symbol();
console.log(typeof sym);

let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();

let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo');

console.log(genericSymbol == otherGenericSymbol); // -> false
console.log(fooSymbol == otherFooSymbol); // -> false

let genericSymbol = Symbol();
console.log(genericSymbol);

let fooSymbol = Symbol('foo');
console.log(fooSymbol);

let mySymbol = new Symbol(); // -> TypeError

let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log(typeof myWrappedSymbol); // -> object

Using Global Symbol Registry

let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol);
let reuseFooGlobalSymbol = Symbol.for('foo');
console.log(fooGlobalSymbol == reuseFooGlobalSymbol); // -> true

let localSymbol = Symbol('foo');
let globalSymbol = Symbol.for('foo');
console.log(localSymbol == globalSymbol); // -> false

let emptySymbol = Symbol.for();
console.log(emptySymbol); // -> Symbol(undefined)

// creating global symbol
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s)); // -> foo

// creating regular symbol
let s2 = Symbol('foo');
console.log(Symbol.keyFor(s2)); // -> undefined
console.log(Symbol.keyFor(123)); // -> TypeError

// Using Symbols as Properties
let s1 = Symbol('foo');
let s2 = Symbol('bar');
let s3 = Symbol('baz');
let s4 = Symbol('qux');

let o = {
	[s1]: 'foo val'
};
console.log(o); // -> {Symbol(foo): 'foo val'}
Object.defineProperty(o, s2, { value: 'bar val' });
console.log(o);
Object.defineProperties(o, {
	[s3]: { value: 'baz val' },
	[s4]: { value: 'qux val' }
});

console.log(o);

let s1 = Symbol('foo');
let s2 = Symbol('bar');

let o = {
	[s1]: 'foo val',
	[s2]: 'bar val',
	'baz': 'baz val',
	'qux': 'qux val'
}
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));
console.log(Object.getOwnPropertyDescriptor(o));
console.log(Reflect.ownKeys(o));

Well - known Symbols
Symbol.asyncIterator

class Foo {
	async *[Symbol.asyncIterator]() { }
}

let f = new Foo();
console.log(f[Symbol.asyncIterator]()); // -> AsyncGenerator [<suspend>]

class Emitter {
	constructor(max) {
		this.max = max;
		this.asyncIdx = 0;
	}

	async *[Symbol.asyncIterator]() {
		while (this.asyncIdx < this.max) {
			yield new Promise(resolve => resolve(this.asyncIdx++));
		}
	}
}

async function asyncCount() {
	let emitter = new Emitter(5);

	for await (const idx of emitter) {
		console.log(idx);
	}
}

asyncCount();

// Symbol.hasInstance
function Foo() { }
let f = new Foo();
console.log(f instanceof Foo); // -> true
console.log(Foo[Symbol.hasInstance](f));// -> true

function Bar() { }
let b = new Bar();
console.log(b instanceof Bar);// -> true
console.log(Bar[Symbol.hasInstance](b));// -> true

class Baz extends Bar {
	static [Symbol.hasInstance]() {
		return false;
	}
}

let baz = new Baz();
console.log(Baz[Symbol.hasInstance](baz)); // -> false
console.log(baz instanceof Baz); // -> false

// Symbol.isConcatSpreadable
let initial = ['foo'];
let array = ['bar'];

console.log(array[Symbol.isConcatSpreadable]); // -> undefined
console.log(initial.concat(array)); // -> ['foo', 'bar']
array[Symbol.isConcatSpreadable] = false;
console.log(initial.concat(array)); // -> ['foo', ['bar']]

let arrayLikeObject = { length: 2, 0: 'baz' };
console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // -> undefined
console.log(initial.concat(arrayLikeObject));
arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(arrayLikeObject));

let otherObject = new Set().add('qux');
console.log(otherObject[Symbol.isConcatSpreadable]); // -> undefined
console.log(initial.concat(otherObject));
otherObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(otherObject));

// Symbol.iterator
class Foo {
	*[Symbol.iterator]() { }
}

let f = new Foo();
console.log(f[Symbol.iterator]()); // -> Generator [<suspended>]

class Emitter {
	constructor(max) {
		this.max = max;
		this.index = 0;
	}

	*[Symbol.iterator]() {
		while (this.index < this.max) {
			yield this.index++;
		}
	}
}

function count() {
	let emitter = new Emitter(5);

	for (const index of emitter) {
		console.log(index);
	}
}

count();

// Symbol.match

class FooMatcher {
	static [Symbol.match](target) {
		return target.includes('foo');
	}
}

console.log('foobar'.match(FooMatcher)); // -> true
console.log('bazqux'.match(FooMatcher)); // -> false

class StringMatcher {
	constructor(str) {
		this.str = str;
	}

	[Symbol.match](target) {
		return target.includes(this.str);
	}
}

let foo = new StringMatcher('foo');
console.log('foobar'.match(foo));
console.log('bazqux'.match(foo));

// Symbol.replace

class FooReplacer {
	static [Symbol.replace](target, replacement) {
		return target.split('foo').join(replacement);
	}
}

console.log('foobar'.replace(FooReplacer, 'qux'));

class StringReplacer {
	constructor(str) {
		this.str = str;
	}

	[Symbol.replace](target, replacement) {
		return target.split(this.str).join(replacement);
	}
}

console.log('foobar'.replace(new StringReplacer('foo'), 'baz'));

// Symbol.search

class FooSearcher {
	static [Symbol.search](target) {
		return target.indexOf('foo');
	}
}

console.log('bazfoobar'.search(FooSearcher));

class StringSearcher {
	constructor(str) {
		this.str = str;
	}

	[Symbol.search](target) {
		return target.indexOf(this.str);
	}
}
console.log('bazfoobar'.search(new StringSearcher('foo')));

// Symbol.species

class Bar extends Array { }

class Baz extends Array {
	static get [Symbol.species]() {
		return Array;
	}
}

let bar = new Bar();
console.log(bar instanceof Bar);
console.log(bar instanceof Array);
bar = bar.concat(bar);
console.log(bar instanceof Bar);
console.log(bar instanceof Array);

let baz = new Baz();
console.log(baz instanceof Baz);
console.log(baz instanceof Array);
baz = baz.concat(baz);
console.log(baz instanceof Baz); // -> false
console.log(baz instanceof Array);

// Symbol.split
class FooSplitter {
	static [Symbol.split](target) {
		return target.split('foo');
	}
}

console.log('barfoobaz'.split(FooSplitter));

class StringSplitter {
	constructor(str) {
		this.str = str;
	}

	[Symbol.split](target) {
		return target.split(this.str);
	}
}

console.log('barfoobazfooqux'.split(new StringSplitter('foo')));

// Symbol.toPrimitive

class Foo { }
let foo = new Foo();

console.log(3 + foo);
console.log(3 - foo);
console.log(String(foo));

class Bar {
	constructor() {
		this[Symbol.toPrimitive] = function (hint) {
			switch (hint) {
				case 'number':
					return 3;
				case 'string':
					return 'string bar';
				case 'default':
					return 'default bar';
			}
		}
	}
}

let bar = new Bar();

console.log(3 + bar);
console.log(3 - bar);
console.log(String(bar));

// Symbol.toStringTag
let s = new Set();

console.log(s);
console.log(s.toString());
console.log(s[Symbol.toStringTag]); // Set

class Foo { };
let foo = new Foo();

console.log(foo);
console.log(foo.toString());
console.log(foo[Symbol.toStringTag]); // -> undefined

class Bar {
	constructor() {
		this[Symbol.toStringTag] = 'Bar';
	}
}

let bar = new Bar();

console.log(bar);
console.log(bar.toString());
console.log(bar[Symbol.toStringTag]); // -> Bar

// The Object Type
let o = new Object();
let o = new Object; // legal but not recommended

let o = new Object({ a: 1, b: 2 });
console.log(o);
console.log(o.hasOwnProperty('a'));
console.log(o.hasOwnProperty('c'));
console.log(o.toString());
console.log(o.valueOf());