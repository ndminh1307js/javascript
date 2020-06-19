/* THE SET TYPE */
const s = new Set();

// Initialize with an array
const s1 = new Set(['val1', 'val2', 'val3']);
console.log(s1.size);
// Initialize with
const s2 = new Set({
  [Symbol.iterator]: function* () {
    yield 'val1';
    yield 'val2';
    yield 'val3';
  }
});
console.log(s2.size);

// add(), has(), delete(), clear()
const s = new Set();

console.log(s.has('Matt'));
console.log(s.size);

s.add('Matt').add('Emily');

console.log(s.has('Matt'));
console.log(s.size);

s.delete('Matt');

console.log(s.has('Matt'));
console.log(s.size);

s.clear();

console.log(s.size);

const s = new Set();

const functionVal = function () { },
  objVal = {},
  symbolVal = Symbol();

s.add(functionVal)
  .add(objVal)
  .add(symbolVal);

console.log(s.size);

console.log(s.has(functionVal)); // -> true
console.log(s.has(function () { })); // -> false


// Order & Iteration
const s = new Set([1, 2, 3]);

console.log([...s.values()]);
console.log([...s.keys()]);
console.log([...s[Symbol.iterator]()]);
console.log([...s.entries()]); // -> [[1,1], [2,2], [3,3]]

