const express = require('express');
const morgan = require('morgan') // third party middleware
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// Express app
const app = express();


// Connect to database
const dbURI = 'mongodb+srv://iModupsy:root@naijagirl.24igp.mongodb.net/naija_girl?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3000); // Listen for request after connection is completed.
    console.log('Connected to database')
  })
  .catch(error => console.log(err));



// Register view engine
app.set('view engine', 'ejs');



// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




// Middleware
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
})


// Routes


app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch(error => {
      console.log(error);
  })
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(error => {
      console.log(error);
  })
});


// Create blog 
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})

























// Mongoose and mongo routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 3',
//     snippet: 'about my new blog',
//     body: 'more about my blog'
//   });

//   blog.save()
//     .then(result => {
//       res.send(result)
//     })
//     .catch(error => {
//       console.log(error);
//     });

// });


// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('6166dac9dd6240bd279cbce3')
//     .then(result => {
//       res.send(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });
