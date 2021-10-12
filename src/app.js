const express = require('express');

// Express app
const app = express();



// Register view engine
app.set('view engine', 'ejs');



// Listen for requests
app.listen(3000);


app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about');
});


// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});


// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})