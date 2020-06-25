/**STYLES */
let myDiv = document.getElementById('myDiv');

// set the background color
myDiv.style.backgroundColor = 'yellow';

// change the dimensions
myDiv.style.width = '10rem';
myDiv.style.height = '10rem';

// assign a border
myDiv.style.border = '1px solid green';

console.log(myDiv.style);

// DOM Style Properties & Methods
let myDiv = document.getElementById('myDiv');

myDiv.style.cssText = `
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
  background-color: orange
`;


for (let i = 0, len = myDiv.style.length; i < len; i++) {
  console.log(myDiv.style[i]);
}

// get css property
let value = myDiv.style.getPropertyValue('background-color');
console.log(value); // orange, if not set, returns ''

// removeProperty()
myDiv.style.removeProperty('background-color'); // set backgroundColor = ''

// Computed Styles

let computedStyle = document.defaultView.getComputedStyle(myDiv, null);

console.log(computedStyle.backgroundColor); // rgba(0,0,0,0)
console.log(computedStyle.borderColor); // rgb(255,0,0)

// Working with Style Sheets

