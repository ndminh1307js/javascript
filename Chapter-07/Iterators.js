/* ITERATOR PATTERN */

// The Iterator Protocol
const arr = [0, 1, 2];

// Iterator Factory
console.log(arr[Symbol.iterator]);

// Iterator
let iter = arr[Symbol.iterator]();

// Performing iteration
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


const arr = [0, 1];
let iter = arr[Symbol.iterator]();

console.log(iter.next());

// insert a number in the middle of arr
arr.splice(1, 0, 2);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Implement a iterator
class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return { done: false, value: 'foo' }
      }
    }
  }
}

let f = new Foo();
console.log(f[Symbol.iterator]);

// Custom Iterator Definition
class Counter {
  constructor(limit) {
    this.count = 1;
    this.limit = limit;
  }

  next() {
    if (this.count <= this.limit) {
      return { done: false, value: this.count++ };
    } else {
      return { done: true, value: undefined };
    }
  }

  [Symbol.iterator]() {
    return this;
  }
}

let counter = new Counter(3);
console.log(counter[Symbol.iterator]);

for (const count of counter) {
  console.log(count);
}

// This block prints nothing
for (const count of counter) {
  console.log(count);
}


class Counter {
  constructor(limit) {
    this.count = 1;
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1, limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.log('Exitting early');
        return { done: true }
      }
    }
  }
}

let counter = new Counter(2);

for (const count of counter) {
  console.log(count);
}

// okay
for (const count of counter) {
  console.log(count);
}

let counter1 = new Counter(3);

for (let i of counter1) {
  if (i > 2) {
    break;
  }

  console.log(i);
}

let counter2 = new Counter(5);

try {
  for (let i of counter2) {
    if (i > 2) {
      throw new Error('Breaking');
    }
    console.log(i);
  }
} catch (err) {
  console.log(err);
}

// Array iterators is not closable
let arr = [0, 1, 2, 3, 4];
let iter = arr[Symbol.iterator]();

iter.return = function () {
  console.log('Exitting early');
  return { done: true };
}

for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break;
  }
}

console.log('----');

for (let i of iter) {
  console.log(i);
}