/**THE LOCATION OBJECT */
// http://localhost:3000/search?keyword='hello'

console.log(location.hash); // #contents
console.log(location.host); // localhost:3000
console.log(location.hostname); // localhost
console.log(location.port); // 3000
console.log(location.href); // http://localhost:3000/search#contents?keyword='hello'
console.log(location.search); // ?keyword=hello
console.log(location.username);
console.log(location.password);
console.log(location.origin);

// Query String Arguments

let getQueryStringArgs = function () {
  // get query string without the initial
  let qs = location.search.length > 0
    ? location.search.substring(1) : '';
  let args = {};

  decodeURIComponent(qs).split('&')
    .map(kv => kv.split('='))
    .forEach(([k, v]) => {
      args[k] = v;
    });

  return args;
}

let queryObject = getQueryStringArgs();
console.log(queryObject);

// URLSearchParams
let qs = location.search;
console.log(qs);
let searchParams = new URLSearchParams(qs);
console.log(searchParams.toString());
console.log(searchParams.get('keyword'));
console.log(searchParams.get('description'));
console.log(searchParams.has('keyword'));
searchParams.set('keyword', 'new');
searchParams.delete('keyword');
console.log(searchParams.toString());

for (const param of searchParams) {
  console.log(param);
}


// Manipulating the Location

// all create a entry in browser's history
location.assign('https://www.google.com');
location.href = 'https://www.facebook.com';
window.location = 'https://www.w3schools.com';

// all set in the url
location.hash = '#contents';
location.search = '?query=string';
location.hostname = 'localhost';
location.pathname = '/mydir';
location.port = '3500';

// reload
location.reload(); // reload - possibly from browser cache
location.reload(true); // reload from server

