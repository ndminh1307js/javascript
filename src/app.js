// /**EVENT HANDLERS */

// // DOM Level 2 Event Handlers
// let button = document.querySelector('#click');

// button.addEventListener('click', () => {
//   console.log('Hello World');
//   console.log(this); // Window object
// }, false);

// /**EVENT OBJECT */
// let button = document.querySelector('#click');
// let content = document.querySelector('#content')
// button.addEventListener('click', (ev) => {
//   console.log(ev.type);
//   console.log(ev.currentTarget);
// }, false);

// /**EVENT TYPES */

// button.addEventListener('mouseenter', () => {
//   content.innerText = 'Mouse Enter Button!';
// });

// button.addEventListener('mouseleave', () => {
//   content.innerText = '';
// });

// let oldX = 0;

// // determine direction x
// document.addEventListener('mousemove', (ev) => {
//   if (ev.clientX > oldX) {
//     content.innerText = 'Move Right';
//   } else {
//     content.innerText = 'Move Left';
//   }

//   oldX = ev.clientX;
// });

// button.addEventListener('mousedown', () => {
//   // reset oldX
//   oldX = 0;
// });

// Tracking Mouse Cursor
let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (ev) => {
  let x = ev.clientX, y = ev.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});


