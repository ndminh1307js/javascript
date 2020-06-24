/**THE WINDOW OBJECT */

// The Global Scope

var age = 29;
var sayAge = function () {
  console.log(this.age);
}

console.log(window.age); // 29
sayAge(); // 29
window.sayAge(); // 29

// Window Position & Pixel Ratio
window.moveTo(0, 0);
window.moveBy(100, 100);

// Pixel Ratios

// Window Size
let pageWidth = window.innerWidth,
  pageHeight = window.innerHeight;
console.log(pageWidth, pageHeight);

window.resizeTo(1000, 150);
window.resizeBy(100, 50);

// Window Viewport Position

// window.scroll | window.scrollBy
window.scroll(0, 80);
window.scrollBy(0, 200);

// window.scrollTo
window.scrollTo(0, 1000);

// ScrollToOptions
window.scrollTo({
  top: 10000,
  left: 0,
  behavior: 'smooth'
});

//  Navigating and Opening Window

window.open('https://www.google.com');

// Poping up window
let newWin = window.open('https://www.google.com', 'Google Search',
  "height=400, width=400, top=10, left=10, resizable=yes");

newWin.resizeTo(500, 500);
newWin.moveTo(100, 100);

setTimeout(() => newWin.close(), 2000); // close

// Intervals And Timeouts

let timeoutId = setTimeout(() => alert('This is the end'), 6000); // never appears
setTimeout(() => clearTimeout(timeoutId), 5000);

let intervalId = setInterval(() => console.log('You are next'), 1000);

document.getElementById('clear').addEventListener('click', () => {
  clearInterval(intervalId);
});

// System Dialogs
alert('Hello guys, how\'s it going?');

if (confirm('Are you sure you wanna fuck me?')) {
  alert('That\'s sound good!');
} else {
  alert('I don\'t look sexy?');
}

let input = prompt('Hello, type your name here!');
alert(input);