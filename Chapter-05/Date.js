/* THE DATE TYPE */
let now = new Date();
console.log(now);

let date1 = new Date(Date.parse('May 13, 2019'));
let date2 = new Date(Date.parse('05/13/2019'));
console.log(date1);
console.log(date2);

let y2k = new Date(Date.UTC(2000, 0, 2, 0));
console.log(y2k);

let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(allFives);

// Inherited Methods
let now = new Date();
console.log(now.toLocaleString());
console.log(now.toString());

// Date-Formating methods
let now = new Date();
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());