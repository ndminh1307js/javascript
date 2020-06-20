/* UNDERSTANDING OBJECTS */

// creating an object by using new instance of Object
let person = new Object();
person.name = 'Mike';
person.age = 19;
person.job = 'Student';
person.sayName = function () {
  console.log(`Hello, my name is ${this.name}`);
}

// creating by using object literal
let person = {
  name: 'Matt',
  age: 20,
  job: 'Web Developer',
  sayName: function () {
    console.log(`Hello, I am ${this.name}`);
  }
}

console.log(person.sayName());

// Types of properties

// Data Properties
let person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Matt'
});

console.log(person.name);
person.name = 'Emily'; // Not applied
console.log(person.name);

let person = {};
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Christopher'
});

console.log(person.name);
delete person.name;
console.log(person.name);

// Accessor Properties

// Define object with pseudo-private member 'year_'
// and public member edition

let book = {
  year_: 2017,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get() {
    return this.year_;
  },
  set(year) {
    if (year >= 2017) {
      this.year_ = year;
      this.edition += year - 2017;
    }
  }
});

book.year = 2018;
console.log(book.edition);

// Defining multiple properties
let book = {};

Object.defineProperties(book, {
  year_: {
    value: 2017
  },
  edition: {
    value: 1
  },
  year: {
    get() {
      return this.year_;
    },
    set(year) {
      if (year >= 2017) {
        this.year_ = year;
        this.edition += year - 2017;
      }
    }
  }
});

// Reading Property Attributes
let book = {};

Object.defineProperties(book, {
  year_: {
    value: 2017
  },
  edition: {
    value: 1
  },
  year: {
    get: function () {
      return this.year_;
    },
    set: function (year) {
      if (year >= 2017) {
        this.year_ = year;
        this.edition += year - 2017;
      }
    }
  }
});

let descriptor = Object.getOwnPropertyDescriptor(book, 'year_');
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

let descriptor2 = Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(typeof descriptor.get);

// Merging Objects
let dest, src, result;

/*
* Simple Copy
*/
dest = { target: 'this' };
src = { id: 'src' };

result = Object.assign(dest, src);
// Object.assign mutates the dest object
// and also return that object after exiting
console.log(result === dest);
console.log(dest !== src);
console.log(dest);
console.log(src);
console.log(result);

/**
 * Multiple source objects
 */

dest = {};

result = Object.assign(dest, { a: 1 }, { b: 2 });
console.log(result);

/**
 * Getters & Setters
 */
dest = {
  set a(val) {
    console.log(`Invoked dest setter with param ${val}`);
  }
};
src = {
  get a() {
    console.log(`Invoked src getter`);
    return 'foo';
  }
}

Object.assign(dest, src);

console.log(dest);

let dest, src, result;

/**
 * Overwritten properties
 */
dest = { id: 'dest' };
result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
console.log(dest);

// Object Destructuring
let person = {
  name: 'Sam',
  age: 20
};

// Without Object destructuring
let personName = person.name, personAge = person.age;
console.log(personName, personAge);
// With Object Destructuring
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

let person = {
  name: 'Joel',
  age: 53
};

// Default values
const { name, job = 'Electrical Engineer' } = person;
console.log(name, job);

// Nested Destructuring
let game = {
  name: 'The Last Of Us Part 2',
  manufacturer: 'Naughty Dog',
  platform: {
    brand: 'Sony',
    name: 'Play Station'
  }
};

const { name, platform: { name: platformName } } = game;
console.log(name, platformName);