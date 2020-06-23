/**PROMISES */

// Controlling Promise state with the Executor
let p = new Promise(() => { });
setTimeout(console.log, 0, p); // Promise <pending>
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise <resolved> | <fulfilled>

new Promise(() => setTimeout(console.log, 0, 'executor'));
setTimeout(console.log, 0, 'promise initialized');

let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// when this console.log executes, the timeout callback has not yet executed
setTimeout(console.log, 0, p); // Promise <pending>

let p = new Promise((resolve, reject) => {
  resolve();
  reject(); // No effect
});

// setTimeout(console.log, 0, p); // Promise <resolved>

let p = new Promise((resolve, reject) => {
  setTimeout(reject, 1000); // After 10s, invoked reject()
  // Do executor things
});

setTimeout(console.log, 0, p); // Promise <pending>
setTimeout(console.log, 1100, p); // Promise <rejected>

// Promise casting with Promise.resolve()
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();

setTimeout(console.log, 0, Promise.resolve()); // Promise <resolved>: undefined
setTimeout(console.log, 0, Promise.resolve(3)); // Promise <resolved>: 3
setTimeout(console.log, 0, Promise.resolve(4, 5, 6)); // Promise <resolved>: 4 --- first argument

// Promise rejection with Promise.reject()
let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();

let p = Promise.reject(3);
setTimeout(console.log, 0, p); // Promise <rejected>: 3

p.then(null).catch(e => console.log(e)); // 3

// Promise Instance Methods
// implementing the thenable interface
class Thenable {
  then() { }
}

// Promise.prototype.then()
function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}

function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p1.then(() => onResolved('p1'), () => onRejected('p1'));
p2.then(() => onResolved('p2'), () => onRejected('p2'));

// Promise.prototype.catch()
let p = Promise.reject();
let onRejected = function (e) {
  setTimeout(console.log, 0, 'rejected');
}

p.then(null, onRejected); // rejected
p.catch(onRejected); // rejected

// catch() return new Promise instance
let p1 = new Promise(() => { });
let p2 = p1.catch();
setTimeout(console.log, 0, p1); // Promise <pending>
setTimeout(console.log, 0, p2); // Promise <pending>
setTimeout(console.log, 0, p1 === p2); // false

// Promise.prototype.finally()
let p1 = Promise.resolve(1);
let p2 = Promise.reject(0);
let onFinally = function () {
  setTimeout(console.log, 0, 'Finally!');
};

p1.then(result => console.log(result))
  .catch(e => console.log(e))
  .finally(onFinally);
p2.then(result => console.log(result))
  .catch(e => console.log(e))
  .finally(onFinally);

// Non Reen-trant Promise Methods
// Create a resolved Promise
let p = Promise.resolve();

// Attach a handler to resolved state
p.then(() => console.log('onResolved handler'));

console.log('then() returns');
// then() returns
// onResolved handler

// Promise order execution
let p1 = Promise.resolve();
p1.then(() => console.log('p1.then() onResolved'));
console.log('p1.then() returns');

let p2 = Promise.reject();
p2.then(null, () => console.log('p2.then() onRejected'));
console.log('p2.then() returns');

let p3 = Promise.reject();
p3.catch(() => console.log('p3.catch() onRejected'));
console.log('p3.catch() returns');

let p4 = Promise.resolve();
p4.finally(() => console.log('p4.finally() onResolved'));
console.log('p4.finally() returns');
// p1.then() returns
// p2.then() returns
// p3.catch() returns
// p4.finally() returns
// p1.then() onResolved
// p2.then() onRejected
// p3.catch() onRejected
// p4.finally() onResolved

// Sibling Handler Order of Execution


