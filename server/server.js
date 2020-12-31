// require express package and db connection file
const express = require('express');
// const path = require('path');
// const routes = require('./routes');
const axios = require('axios');
// const mongoose = require('mongoose');
const bookController = require('./controller/books')
require('./config/db')();

// start express server
const app = express();

// create local port for app to run on
const PORT = process.env.PORT || 3000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true
// });

app.get('/api/books/:title', (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q="
  + req.params.title
  + process.env.GOOGLE_API_KEY)
    .then(response => {
      res.json(response.data.items);
    }).catch(error => console.log(error))
});

//* STICK THESE IN A ROUTE FOLDER WHEN DONE
// route hit for books
app.route('/')
    .get(bookController.findAll)
    .post(bookController.create);

// route hit for book with specific ID
app.route('/:id')
    // .get(bookController.findById)
    // .put(bookController.update)
    .delete(bookController.remove);


// app.use(routes);

// server listener on whatever port is available
app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});