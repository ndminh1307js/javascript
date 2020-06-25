/**SELECTORS API */
// querySelector()
let div = document.querySelector('#myId');
console.log(div);
div.className = 'bg-dark';
console.log(div);

let emailInput = document.querySelector('input[type="text"]');
console.log(emailInput);
let usernameInput = document.querySelector('input[name^="user"');
console.log(usernameInput);
let passwordInput = document.querySelector('input[name$="wd"]');
console.log(passwordInput);

// querySelectorAll()
const items = document.querySelectorAll('.item'); // snapshot
console.log(items);

// Focus Management
emailInput.focus();
console.log(document.hasFocus());

// Changes to HTMLDocument

// Character Set Properties
console.log(document.characterSet); // UTF-8

// Custom Data Attributes
console.log(div.dataset);
let { appid, name } = div.dataset;
console.log(appid, name);
// set dataset
div.dataset.appid = 4321;
div.dataset.name = 'Matthew';

// Markup Insertion

div.innerHTML = 'Hello World. I am the King of the world';

setTimeout(() => {
  div.innerHTML = `Change Text with appId ${appid}, <p>Welcome & Welcome</p>`;
}, 2000);

let outerDiv = document.querySelector('#outer');
outerDiv.outerHTML = 'Hello';
// outerDiv will be replaced with textNode value='Hello'

// insertAdjacentHTML() & insertAdjacentText()
let insertDiv = document.getElementById('insertion');

// insert as previous sibling of insertDiv
insertDiv.insertAdjacentHTML('beforebegin', '<p>Hello World</p>');
insertDiv.insertAdjacentText('beforebegin', 'Hello World');

// insert as the first child of insertDiv
insertDiv.insertAdjacentHTML('afterbegin', '<p>Hello World</p>');
insertDiv.insertAdjacentText('afterbegin', 'Hello World');

// insert as next sibling of insertDiv
insertDiv.insertAdjacentHTML('afterend', '<p>Hello World</p>');
insertDiv.insertAdjacentText('afterend', 'Hello World');

// insert as last child of insertDiv
insertDiv.insertAdjacentHTML('beforeend', '<p>Hello World</p>');
insertDiv.insertAdjacentText('beforeend', 'Hello World');

// The scrollIntoView() Method
document.querySelector('.list').scrollIntoView({ behavior: 'smooth' });

// scroll into view if it is visible
document.querySelector('.list').scrollIntoViewIfNeeded({ behavior: 'smooth' });

/**PROPRIETARY EXTENSIONS */
// The children Property
console.log(document.body.children); // ignore textNode

// The contains() method
// search node in the tree with rootElement root
if (document.body.contains(div)) {
  console.log('Div Element in Document Body');
} else {
  console.log('Div is not in Document Body');
}

console.log(document.body.contains(document.querySelector('.item'))); // true