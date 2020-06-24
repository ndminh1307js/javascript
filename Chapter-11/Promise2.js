// Promise Chaining & Composition

// Promise Chaining
let p = new Promise((resolve, reject) => {
  console.log('first');
  resolve();
});

p.then(() => console.log('second'))
  .then(() => console.log('third'))
  .then(() => console.log('fourth'));
// first
// second
// third
// fourth

// chain asynchronous tasks
let p1 = new Promise((resolve, reject) => {
  console.log('p1 executor');
  setTimeout(resolve, 1000);
});

p1.then(() => new Promise((resolve, reject) => {
  console.log('p2 executor');
  setTimeout(resolve, 1000);
}))
  .then(() => new Promise((resolve, reject) => {
    console.log('p3 executor');
    setTimeout(resolve, 1000);
  }))
  .then(() => new Promise((resolve, reject) => {
    console.log('p4 executor');
    setTimeout(resolve, 1000);
  }))

// combining
function delayedResolve(str) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, console.log(str));
  });
}

delayedResolve('p1 executor')
  .then(() => delayedResolve('p2 executor'))
  .then(() => delayedResolve('p3 executor'))
  .then(() => delayedResolve('p4 executor'));

let p = new Promise((resolve, reject) => {
  console.log('initial promise reject');
  reject();
});

p.catch(() => console.log('reject handler'))
  .then(() => console.log('resolve handler'))
  .finally(() => console.log('finally handler'));

// Promise Graphs

// Parallel Promise Composition with Promise.all() & Promise.race()

let p1 = Promise.all([
  Promise.resolve(),
  Promise.resolve()
]);

let p2 = Promise.all([1, 2]);
let p3 = Promise.all([]);

// Invalid
// let p4 = Promise.all();

// resolve once every contained promises is resolved
let p = Promise.all([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p); // Promise <pending>

p.then(() => setTimeout(console.log, 0, 'all() resolved'));
// all() resolved (after 1s)

let p = Promise.all([
  Promise.resolve(),
  new Promise(() => { })
]);

setTimeout(console.log, 0, p); // Promise <pending>

let p = Promise.all([
  Promise.resolve(),
  Promise.reject(),
  Promise.resolve()
]);

setTimeout(console.log, 0, p); // Promise <rejected>

let p = Promise.all([
  Promise.resolve(3),
  Promise.resolve(),
  Promise.resolve(4)
]);

p.then((values) => console.log(values)); // [3, undefined, 4]

// if one of the promises rejects, the first reject set to reason for catch()
let p = Promise.all([
  Promise.resolve(),
  Promise.reject(3),
  Promise.reject(4)
]);

p.catch((reason) => console.log(reason)); // 3

// Promise.race()

let p1 = Promise.race([
  new Promise((resolve, reject) => setTimeout(reject, 1000)),
  Promise.resolve()
]);

setTimeout(console.log, 0, p1); // Promise <resolved>

let p2 = Promise.race([
  Promise.reject(4),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);

setTimeout(console.log, 0, p2); // Promise <rejected>: 4

let p3 = Promise.race([
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5)
]);

setTimeout(console.log, 0, p3); // Promise <resolved>: 3

let p = Promise.race([
  new Promise((resolve, reject) => setTimeout(resolve, 1000, 1)),
  new Promise((resolve, reject) => setTimeout(reject, 1500)),
  Promise.resolve(2)
]);

p.then(val => console.log(val))
  .catch(err => console.log(err));

// Serial Promise Composition
function addTwo(x) { return x + 2 };
function addThree(x) { return x + 3 };
function addFive(x) { return x + 5 };

function addTen(x) {
  return Promise.resolve(x)
    .then(addTwo)
    .then(addThree)
    .then(addFive)
}

addTen(8).then(console.log); // 18

// using Array.prototype.reduce
function addTwo(x) { return x + 2 };
function addThree(x) { return x + 3 };
function addFive(x) { return x + 5 };

function addTen(x) {
  return [addTwo, addThree, addFive]
    .reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

addTen(8).then(console.log);

// Promise Extensions
