const express = require('express');
// const morgan = require('morgan') // third party middleware
const mongoose = require('mongoose');

// Express app
const app = express();


// Register view engine
app.set('view engine', 'ejs');



// Listen for requests
app.listen(3000);

// Middleware & static files
app.use(express.static('public'));
// app.use(morgan('dev'));

// Middleware
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
})


app.get('/', (req, res) => {
  const blogs = [
    { title: 'Lorem ipsum dolor sit amet.', snippet: 'Lorem ipsum dolor sit amet adipisicing elit.' },
    { title: 'Lorem ipsum dolor sit amet.', snippet: 'Lorem ipsum dolor sit amet adipisicing elit.' },
    { title: 'Lorem ipsum dolor sit amet.', snippet: 'Lorem ipsum dolor sit amet adipisicing elit.' },
    { title: 'Lorem ipsum dolor sit amet.', snippet: 'Lorem ipsum dolor sit amet adipisicing elit.' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// Create blog 
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})