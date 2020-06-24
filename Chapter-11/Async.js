/**ASYNC FUNCTION */

// Async Function Basics
// async keyword

// async function returns a promise object

async function foo() {
  console.log(1);
  // return 3;
  return Promise.resolve(3);
}

foo().then(console.log);
console.log(2);
// 1
// 2
// 3

// Return a primitive
async function foo() {
  return 'foo';
}

foo().then(console.log);

// await keyword
// rewritten using async/await
async function foo() {
  let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
  console.log(await p);
}

foo();

async function foo() {
  console.log(1);
  await Promise.reject(3);
  console.log(4); // never prints
}

foo().catch(console.log);
console.log(2);

// Restrictions on await

// Halting & Resuming Execution

async function foo() {
  console.log(await new Promise((resolve, reject) => setTimeout(resolve, 1000, 'foo')));
}

async function bar() {
  console.log(await 'bar');
}

async function baz() {
  console.log('baz');
}

foo();
bar();
baz();
// baz
// bar
// foo


async function foo() {
  console.log(2);
  console.log(await 4);
  console.log(5);
}

console.log(1);
foo();
console.log(3);

async function foo() {
  console.log(2);
  console.log(await Promise.resolve(6));
  console.log(7);
}

async function bar() {
  console.log(4);
  console.log(await 8);
  console.log(9);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5)