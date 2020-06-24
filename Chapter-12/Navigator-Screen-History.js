/**THE NAVIGATION OBJECT */
console.log(navigator);

/**THE SCREEN OBJECT */
console.log(screen);

/**THE HISTORY OBJECT */

history.go(-1);
history.go(1);
history.go(2);
history.go('someurl');
history.forward();
history.back();

if (history.length === 0) {
  console.log('this is first page');
} else {
  console.log('you are not the new');
}

history.pushState({ count: 0 }, 'My title', 'http://localhost:3000');
console.log(history.state);