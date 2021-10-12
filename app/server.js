const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

  // Lodash
  const num = _.random(0, 12);
  console.log(num);

  const greet = _.once(() => {
    console.log('Goodday');
  });
  greet();
  greet(); // Doesn't work


  // set header content type
  res.setHeader('Content-Type', 'text/html');


  // Basic routing
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us': // Redirecting
      res.statusCode = 301;
      res.setHeader('Location', '/about'); 
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data); // If data is only one
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});