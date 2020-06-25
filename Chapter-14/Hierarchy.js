/**HIERARCHY OF NODES */
console.log(document.nodeType);

const parent = document.getElementById('parent');

// Node relationships
// child nodes | children
console.log(parent.childNodes); // NodeList(7) including #text
console.log(parent.childNodes[0]); // first child
console.log(parent.childNodes.item(1)); // second child

// firstChild, lastChild
console.log(parent.firstChild); // #text
console.log(parent.lastChild); // #text

// sibling
const firstChild = parent.firstChild;
console.log(firstChild.nextSibling); // div First
console.log(firstChild.previousSibling); // null

// Manipulating Nodes
const parent = document.getElementById('parent');
const firstChild = parent.firstChild;
const lastChild = parent.lastChild;

function createNode(nodeText) {
  const newNode = document.createElement('div');
  newNode.innerText = nodeText;
  return newNode;
}


// appendChild()
console.log(parent.appendChild(createNode('1'))); // returns new node

// insertBefore()
console.log(parent.insertBefore(createNode('2'), firstChild));

// replaceChild()
// replace last child with child '3'
console.log(parent.replaceChild(createNode('3'), parent.lastChild));

// removeChild()
parent.removeChild(parent.childNodes[2]);

// Other Methods
const list = document.getElementsByTagName('ul')[0];

let deepList = list.cloneNode(true);
console.log(deepList);

let shallowList = list.cloneNode(false); // not copy child nodes
console.log(shallowList);



// The Document Type
// Document children
let html = document.documentElement;
console.log(html);
let body = document.body;
console.log(body);
let doctype = document.doctype;
console.log(doctype);

// document type is read-only
// appendChild, removeChild, replaceChild arenot used on document

// Document information
let oldTitle = document.title;
console.log(oldTitle);
// set title
document.title = 'New title';

// get URL
console.log(document.URL);
// get Domain
console.log(document.domain);
// get referrer
console.log(document.referrer);

// Locating Elements
// Special Collections
console.log(document.anchors); // <a>
console.log(document.applets); // <applet>
console.log(document.forms); // <form>
console.log(document.images); // <img>
console.log(document.links); // <a href='something'>


// The Element Type
// HTML elements
// Getting Attributes
let div = document.getElementById('myDiv');
console.log(div.getAttribute('class'));
console.log(div.getAttribute('id'));
console.log(div.getAttribute('lang'));
console.log(div.getAttribute('dir'));
console.log(div.getAttribute('title'));
// getAttribute can access custom attributes

// Setting Attributes
div.setAttribute('class', 'bg-dark');
div.setAttribute('my_special_attr', 'Hello');
console.log(div.getAttribute('my_special_attr'));

// Removing Attributes
div.removeAttribute('my_special_attr');

// attributes property
console.log(div.attributes);
console.log(div.attributes.getNamedItem('id').nodeValue);
let id = div.attributes.getNamedItem('id');
console.log(div.attributes.setNamedItem(id)); // add new
console.log(div.attributes.removeNamedItem('id'));

// Creating Elements
let div = document.createElement('div');
div.id = 'myId';
div.className = 'bg-dark text-center';
document.body.appendChild(div);


// Element children
