/**MUTATION OBSERVERS */

// Basic Usage

// the observer() method
let div = document.getElementById('myDiv');
let observer = new MutationObserver(
  (mutationRecords) => console.log(mutationRecords));

// Observe attribute mutations
observer.observe(document.body, { attributes: true });
// observer.observe(div, { attributes: true });

// Observe character data mutations
observer.observe(div, { characterData: true });

// Observe child mutations
observer.observe(document.body, { childList: true });

document.body.className = 'page-1';
setTimeout(() => {
  div.innerText = 'Hello';
  document.body.appendChild(document.createElement('div'));
}, 2000);
