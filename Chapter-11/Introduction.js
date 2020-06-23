/**INTRODUCING TO ASYNCHRONOUS PROGRAMMING */

// Legacy Asynchronous Programming
// returnings asynchronous values

function double(value, callback) {
  setTimeout(() => callback(value * 2), 1000);
}

double(3, x => {
  console.log(x);
});

// handling failure
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw new Error('value must be a number');
      }

      success(value * 2);
    } catch (err) {
      failure(err);
    }
  }, 1000)
}

const successCallback = (x) => console.log('Double value: ' + x);
const failureCallback = (err) => console.warn('Error: ' + err);
double('1', successCallback, failureCallback);

// Nesting Asynchronous Callbacks
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw new Error('value must be a number');
      }

      success(value * 2);
    } catch (err) {
      failure(err);
    }
  }, 1000);
}

const successCallback = x => {
  double(x, (y) => console.log('Double value: ' + y))
};
const failureCallback = (err) => console.warn('Error: ' + err);

double(3, successCallback, failureCallback);