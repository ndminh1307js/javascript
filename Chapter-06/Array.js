/* THE ARRAY TYPE */

// Creating arrays
let colors = new Array();
console.log(colors);
console.log(typeof colors);

let emptyColors = new Array(20);
console.log(emptyColors);

let rgb = new Array('red', 'green', 'blue');
console.log(rgb);

// using array literal ({{{never call Array constructor}}})
let names = ['Matt', 'Emily', 'Jess'];
console.log(names);

// from() method
const arrFromString = Array.from('hello world');
console.log(arrFromString);

const arrFromMap = Array.from(new Map().set(1, 2).set(3, 4));
console.log(arrFromMap);

const arrFromSet = Array.from(new Set().add(1).add(2).add(3));
console.log(arrFromSet);

let a1 = [1, 2, 3, 4];
let a2 = Array.from(a1);
console.log(a1 === a2); // -> false

const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}
const arrFromIter = Array.from(iter);
console.log(arrFromIter);

function getArrayFromArgs() {
  return Array.from(arguments);
}

console.log(getArrayFromArgs(1, 2, 3, 4)); // -> [1,2,3,4]

const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
console.log(Array.from(arrayLikeObject));

const fiveNumbers = [1, 2, 3, 4, 5];
console.log(Array.from(fiveNumbers, x => x ** 2));
console.log(Array.from(fiveNumbers, function (x) { return x ** this.exponent }, { exponent: 3 }));


// of() method
console.log(Array.of(1, 2, 3, 4)); // -> [1,2,3,4]
console.log(Array.of(undefined)); // -> [undefined]

// Array Holes
const holes = [, , , , ,];
console.log(holes);

const holes1 = [1, , , , 5];
console.log(holes1);

for (const elem of holes1) {
  console.log(elem === undefined);
}

console.log(Array.from([, , ,]));
console.log(Array.of(...[, , ,]));

const arrToMap = [1, , , , 5];
console.log(arrToMap.map(x => 6));

Indexing Into Arrays

// indexing
let colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[3]); // -> undefined
colors[1] = 'black';
colors[2] = 'white';
console.log(colors);

// length prop
let names = ['matt', 'mike', 'chris'];
console.log(names.length);
let empty = [];
console.log(empty.length);

names[names.length] = 'sam';
names[names.length] = 'ashley';
console.log(names);

// MAXIMUM ITEMS IN ARRAY: 2^32 - 1 = 4294967295 (items)

// Detecting Arrays
let names = ['Ellie', 'Jessica', 'Josh', 'Hannah'];
console.log(names instanceof Array); // -> true only when single frame in a single webpage
console.log(Array.isArray(names)); // -> always return true

// Iterator Methods
let games = ['Until Dawn', 'Horizon Zero Dawn', 'Detroit: Become Human'];
console.log(Array.from(games.keys()));
console.log(Array.from(games.values()));
console.log(Array.from(games.entries()));

for (const [index, game] of Array.from(games.entries())) {
  console.log(index, game);
}

// Copy & fill methods

// fill()
const zeroes = [0, 0, 0, 0, 0];
zeroes.fill(5);
console.log(zeroes);
//reset
zeroes.fill(0);
zeroes.fill(1, 3);
console.log(zeroes);
//reset
zeroes.fill(0);
zeroes.fill(1, 2, 4);
console.log(zeroes);

// copyWithin
let ints;
const reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
console.log(ints);

ints.copyWithin(5);
console.log(ints);
reset();

ints.copyWithin(0, 5);
console.log(ints);
reset();

// copy contents from index 5 -> index 7 (not including end value) to index 0
ints.copyWithin(0, 5, 8); // array.copyWithin(destIndex, start, end); 
console.log(ints);
reset();

// Conversion Methods

let cities = ['London', 'New York', 'Tokyo'];
console.log(cities.length);
console.log(cities.toString());
console.log(cities.valueOf()); // -> 'London,New York,Tokyo' is a string
console.log(cities);

let person1 = {
  toLocaleString() {
    return 'Nikolaos';
  },
  toString() {
    return 'Nicholas';
  }
}

let person2 = {
  toLocaleString() {
    return 'Grigorios';
  },
  toString() {
    return 'Greg';
  }
}

let people = [person1, person2];

for (const person of people) {
  console.log(person.toLocaleString());
  console.log(person.toString());
}

// join() method
console.log(cities.join(', '));

// Stack Methods
let platforms = ['Play Station', 'Xbox', 'PC'];
console.log(platforms.push('Nintendo')); // -> last index
console.log(platforms);

let lastElem = platforms.pop();
console.log(lastElem);
console.log(platforms);

// Queue Methods
let platforms = ['Play Station', 'Xbox', 'PC'];
console.log(platforms.push('Nintendo')); // -> last index
console.log(platforms);

let firstElem = platforms.shift();
console.log(firstElem);
console.log(platforms);

// unshift()
platforms.unshift(firstElem);
console.log(platforms);

// Reordering Methods
let values = [0, 1, 2, 3, 4];
values.reverse();
console.log(values);

let otherValues = [0, 3, 1, 21, 11, 1, 20];
otherValues.sort();
console.log(otherValues);

otherValues.sort((a, b) => a - b);
console.log(otherValues);

// BOTH REVERSE & SORT return a reference to the array

// Manipulation Methods
// concat
let names = ['Mike', 'Hannah', 'Jess'];
let names2 = names.concat('Chris', ['Beth', 'Flamethrower Guy']);
console.log(names2); // 

let colors = ['red', 'green', 'blue'];
let newColors = ['black', 'cyan'];

let moreNewColors = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 'pink',
  1: 'purple'
}

newColors[Symbol.isConcatSpreadable] = false;

console.log(colors);
let colors1 = colors.concat(newColors); // is not flattened when [Symbol.isConcatSpreadable] = false
console.log(colors1);
let colors2 = colors.concat(moreNewColors);
console.log(colors2);

// slice
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.slice(1));
console.log(num.slice(3, 5)); // -> 3,4
console.log(num.slice(-5, -1));

console.log(num);

// splice
let songs = ['Perfect', 'Let her go', 'A thousand miles', 'A thousand years'];
let subSongs = songs.splice(2, 1); // (start, COUNT)
console.log(subSongs);
console.log(songs); // -> splice method return a reference to the array

// Search & Location Methods
let nums = [0, 1, 2, 3, 4, 3, 2, 1, 0];
console.log(nums.indexOf(1));
console.log(nums.lastIndexOf(1));
console.log(nums.includes(3)); // -> true

console.log(nums.indexOf(1, 4));
console.log(nums.lastIndexOf(1, 4));
console.log(nums.includes(3, 4)); // -> true

let person = { name: 'Matt' };
let people = [{ name: 'Matt' }];
let morePeople = [person];

console.log(people.indexOf(person));
console.log(people.lastIndexOf(person));
console.log(people.includes(person));

console.log(morePeople.indexOf(person));
console.log(morePeople.lastIndexOf(person));
console.log(morePeople.includes(person));

// Predicate Search
const people = [
  { name: 'Ashley', age: 18 },
  { name: 'Chris', age: 19 }
];

console.log(people.find((elem, index, array) => elem.name === 'Chris'));
console.log(people.findIndex((elem, index, array) => elem.age < 19));

// Iterative Methods
let numbers = [0, 1, 2, 3, 4, 5];

console.log(numbers.every((item, index, array) => item < 6)); // -> true
console.log(numbers.some((item, index, array) => item > 6)); // -> false

numbers.forEach((item, index, array) => {
  console.log(item, index, array);
});

console.log(numbers.map((item, index, array) => ({ index, value: item })));

console.log(numbers.filter((item, index, array) => item > 3));

// Reduction Methods
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((prev, cur, index, array) => prev + cur, 0));
console.log(numbers.reduceRight((prev, cur, index, array) => prev - cur, 0));