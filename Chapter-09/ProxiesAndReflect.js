/* PROXY FUNDAMENTALS */
// Creating a Passthrough Proxy
const target = {
  id: 'target'
}

const handler = {};

const proxy = new Proxy(target, handler);
console.log(target.id);
console.log(proxy.id);

target.id = 'foo';
console.log(target.id);
console.log(proxy.id);

proxy.id = 'bar';
console.log(target.id);
console.log(proxy.id);

console.log(target.hasOwnProperty('id')); // true
console.log(proxy.hasOwnProperty('id')); // true

console.log(target === proxy); // false

// Defining Traps
const target = {
  foo: 'bar'
};

const handler = {
  get(trapTarget, property, receiver) {
    console.log(target === trapTarget);
    console.log(property);
    console.log(receiver === proxy);
    return trapTarget[property];
  }
}

const proxy = new Proxy(target, handler);

console.log(target.foo); // bar
console.log(proxy.foo); // handler override

// Reflect API
const target = {
  foo: 'bar'
};

const handler = {
  get() {
    return Reflect.get(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
console.log(target.foo);

// modify the trapped method
const target = {
  foo: 'bar',
  baz: 'qux'
};

const handler = {
  get(trapTarget, property, receiver) {
    let decoration = '';
    if (property === 'foo') {
      decoration = '!!!';
    }

    return Reflect.get(...arguments) + decoration;
  }
}

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
console.log(target.foo);

console.log(proxy.baz);
console.log(target.baz);

// Trap Invariants
const target = {};

Object.defineProperty(target, 'foo', {
  writable: false,
  configurable: false,
  value: 'bar'
});

const handler = {
  get() {
    return 'qux'; // only allows to return 'bar'
  }
}

const proxy = new Proxy(target, handler);
console.log(proxy.foo); // TypeError

// Revocable Proxies
// disabling association between the proxy & target
const target = {
  foo: 'bar'
};

const handler = {
  get() {
    return 'intercepted';
  }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(proxy.foo);
console.log(target.foo);

revoke(); // disable
console.log(proxy.foo); // TypeError
console.log(target.foo);

// Status Flags

// refactored code
const o = {};

if (Reflect.defineProperty(o, 'foo', { value: 'bar' })) {
  console.log('success');
} else {
  console.log('failure');
}

// Proxying a Proxy
const target = {
  foo: 'bar'
};

const firstProxy = new Proxy(target, {
  get() {
    console.log('first proxy');
    return Reflect.get(...arguments);
  }
});

const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log('second proxy');
    return Reflect.get(...arguments);
  }
});

console.log(secondProxy.foo);

// Proxy Considerations and Shortcomings


/* PROXY TRAPS AND REFLECT METHODS */

// get()

// set()
const myTarget = {};

const proxy = new Proxy(myTarget, {
  set(target, property, value, receiver) {
    console.log('set() invoked');
    return Reflect.set(...arguments);
  }
});

proxy.foo = 'bar';

// has()
const myTarget = {};

const proxy = new Proxy(myTarget, {
  has(target, property) {
    console.log('has() invoked');
    return Reflect.has(...arguments);
  }
});

console.log('foo' in proxy);

// defineProperty
const myTarget = {};

const proxy = new Proxy(myTarget, {
  defineProperty(target, property, descriptor) {
    console.log('defineProperty() invoked');
    return Reflect.defineProperty(...arguments);
  }
});

Object.defineProperty(proxy, 'foo', { value: 'bar' });

// getOwnPropertyDescriptor
const myTarget = {};

const proxy = new Proxy(myTarget, {
  getOwnPropertyDescriptor(target, property) {
    console.log('getOwnPropertyDescriptor() invoked');
    return Reflect.getOwnPropertyDescriptor(...arguments);
  }
});

Object.getOwnPropertyDescriptor(proxy, 'foo');

// deleteProperty()
const myTarget = {
  foo: 'bar'
};

const proxy = new Proxy(myTarget, {
  deleteProperty(target, property) {
    console.log('deleteProperty() invoked');
    return Reflect.deleteProperty(...arguments);
  }
});

delete proxy.foo;

// ownKeys()

const myTarget = {};

const proxy = new Proxy(myTarget, {
  ownKeys(target) {
    console.log('ownKeys() invoked');
    return Reflect.ownKeys(...arguments);
  }
});

Object.keys(proxy);

getPrototypeOf()
setPrototypeOf()
isExtensible()
preventExtension()
apply()
construct()-- - new proxy


/* PROXY PATTERN */

// Tracking property access
const user = {
  name: 'Jake'
};

const proxy = new Proxy(user, {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(...arguments);
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${property}`);
    return Reflect.set(...arguments);
  }
});

proxy.name;
proxy.age = 27;

// Hidden properties
const hiddenProperties = ['foo', 'bar'];
const target = {
  foo: 1,
  bar: 2,
  baz: 3
};
const proxy = new Proxy(target, {
  get(target, property, receiver) {
    if (hiddenProperties.includes(property)) {
      return undefined;
    } else {
      return Reflect.get(...arguments);
    }
  },
  has(target, property) {
    if (hiddenProperties.includes(property)) {
      return false;
    } else {
      return Reflect.has(...arguments);
    }
  }
});

console.log(proxy.foo);
console.log('foo' in proxy);

// Property Validation
const target = {
  onlyNumbersGoHere: 0
};

const proxy = new Proxy(target, {
  set(target, property, value, receiver) {
    if (typeof value !== 'number') {
      return false;
    } else {
      return Reflect.set(...arguments);
    }
  }
});

proxy.onlyNumbersGoHere = 'string';
console.log(proxy.onlyNumbersGoHere); // 0
proxy.onlyNumbersGoHere = 12;
console.log(proxy.onlyNumbersGoHere); // 12

// Data Binding & Observables

// bound to global collections
const userList = [];

class User {
  constructor(name) {
    this.name = name;
  }
}

const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser;
  }
});

new proxy('John');
new proxy('Jake');
console.log(userList);

// bound to an emitter
const userList = [];

function emit(newValue) {
  console.log(newValue);
}

const proxy = new Proxy(userList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      emit(Reflect.get(target, property, receiver));
    }
    return result;
  }
});

proxy.push('John');
proxy.push('Jake');