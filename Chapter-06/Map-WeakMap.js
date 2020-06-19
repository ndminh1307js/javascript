/* THE MAP TYPE */
const m = new Map();

// Initialize map with nested arrays
const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3']
]);
console.log(m1.size);

// Initialize map with custom-defined iterator
const m2 = new Map({
  [Symbol.iterator]: function* () {
    yield ['key1', 'val1'];
    yield ['key2', 'val2'];
    yield ['key3', 'val3'];
  }
});

console.log(m2.size);

// expects values to be key/value whether they are provided or not
const m3 = new Map([[]]);
console.log(m3.has(undefined));
console.log(m3.get(undefined));

const m = new Map();
m.set('name', 'Chris');
console.log(m.has('name'));
console.log(m.get('name'));
m.set('age', 29).set('gender', true);
console.log(m);

const m = new Map();

const functionKey = function () { };
const symbolKey = Symbol();
const objectKey = new Object();

m.set(functionKey, 'functionValue')
  .set(symbolKey, 'symbolValue')
  .set(objectKey, 'objectVal');

console.log(m.get(functionKey));
console.log(m.get(function () { })); // -> undefined

const m = new Map();
const objectKey = {},
  objectVal = {},
  arrKey = [],
  arrVal = [];

m.set(objectKey, objectVal)
  .set(arrKey, arrVal);

console.log(m.get(objectKey));
console.log(m.get(arrKey));

objectKey.foo = 'foo';
objectVal.bar = 'bar';
arrKey.push('foo');
arrVal.push('bar');

console.log(m.get(objectKey)); // {bar: 'bar'}
console.log(m.get(arrKey)); // ['bar']

const m = new Map();

const a = 0 / '',
  b = 0 / '',
  pz = +0,
  nz = -0;

console.log(a === b);
console.log(pz === nz);
m.set(a, 'foo');
m.set(pz, 'bar');

console.log(m.get(b)); // -> foo
console.log(m.get(nz)); // -> bar

// Order And Iteration
const m = new Map([
  ['k1', 'v1'],
  ['k2', 'v2'],
  ['k3', 'v3'],
]);

console.log(m.entries === m[Symbol.iterator]); // -> true

// entries()
for (let pair of m.entries()) {
  console.log(pair);
}

for (let pair of m[Symbol.iterator]()) {
  console.log(pair);
}

console.log([...m]);

// forEach()
m.forEach((value, key) => console.log(`${key} -> ${value}`));

// keys()
console.log(m.keys());

//values()
console.log(m.values());

/* THE WEAKMAP TYPE */
const key1 = { id: 1 },
  key2 = new String('foo'),
  key3 = new Number(1);

const wm = new WeakMap([
  [key1, 'val1'],
  [key2, 'val2'],
  [key3, 'val3']
]);

console.log(wm);

// wm.set(1, 1); -> TypeError: can not use a key that is not object type or inherit

// Utility
// Private variables
const wm = new WeakMap();

class User {
  constructor(id) {
    this.idProperty = Symbol('id');
    this.setId(id);
  }

  setPrivate(prop, val) {
    const privateMembers = wm.get(this) || {};
    privateMembers[prop] = val;
    wm.set(this, privateMembers);
  }

  getPrivate(prop) {
    return wm.get(this)[prop] || undefined;
  }

  setId(id) {
    this.setPrivate(this.idProperty, id);
  }

  getId() {
    return this.getPrivate(this.idProperty);
  }
}

const user = new User(123);
console.log(user.idProperty)
user.setId(456);
console.log(user.getId());

// wrap class User in a closure
const User = (() => {
  const wm = new WeakMap();

  class User {
    constructor(id) {
      this.idProperty = Symbol('id');
      this.setId(id);
    }

    setPrivate(prop, val) {
      const privateMembers = wm.get(this) || {};
      privateMembers[prop] = val;
      wm.set(this, privateMembers);
    }

    getPrivate(prop) {
      return wm.get(this)[prop] || undefined;
    }

    setId(id) {
      this.setPrivate(this.idProperty, id);
    }

    getId() {
      return this.getPrivate(this.idProperty);
    }
  }

  return User;
})();

const user = new User(123);
console.log(user.idProperty)
user.setId(456);
console.log(user.getId());