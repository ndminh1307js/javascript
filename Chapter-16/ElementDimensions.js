// Element Dimensions

// Offset Dimensions
let content = document.getElementById('content');

console.log(content.offsetTop); // 200px
console.log(content.offsetLeft); // 100px
console.log(content.offsetHeight); // 180px
console.log(content.offsetWidth); // 280px;

console.log(content.offsetParent); // body

// Client Dimensions

console.log(content.clientHeight); // 140px
console.log(content.clientWidth); // 240px

// Scroll Dimensions
content.addEventListener('scroll', () => {
  console.log(content.scrollTop);
  console.log(content.scrollLeft);
});

console.log(content.scrollWidth);
console.log(content.scrollHeight);

// scroll content div to bottom
document.getElementById('scrollToBottom')
  .addEventListener('click', () => {
    content.scrollTo({
      top: content.scrollHeight,
      behavior: 'smooth'
    })
  });

// determine document dimensions

let docHeight = Math.max(document.documentElement.scrollHeight,
  document.documentElement.clientHeight);
let docWidth = Math.max(document.documentElement.scrollWidth,
  document.documentElement.clientWidth);
console.log(docHeight, docWidth);

window.addEventListener('resize', () => {
  let docHeight = Math.max(document.documentElement.scrollHeight,
    document.documentElement.clientHeight);
  let docWidth = Math.max(document.documentElement.scrollWidth,
    document.documentElement.clientWidth);
  console.log(document.documentElement.clientHeight);
  console.log(docHeight, docWidth);
});

// Determine Element Dimensions relative to the VIEWPORT
console.log(content.getBoundingClientRect());

