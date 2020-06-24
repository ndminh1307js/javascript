/**Native Prototype */

// Add method "f.defer(ms)" to the functions
function f() {
  alert('Hello world!');
}

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
}

f.defer(1000);

// Adding decorating defer() to functions
Function.prototype.defer = function (ms) {
  const f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // 3 after 1000ms

