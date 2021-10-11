/**
 * Node uses V8 Machine ...
 * 
 * Just like window in javaScript, node uses global to get the (window) object.
 * Also, you can decide not to use global first and it still works.
 */

global.setTimeout(() => {
  console.log(`Hello world in Node.js!`);
  clearInterval(timerId)
}, 5000)

// Or

const timerId = setInterval(() => {
  console.log('Another hello world in Node.js...')
}, 1000)

