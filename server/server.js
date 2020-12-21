// require express package and db connection file
const express = require('express');
require('./config/db')();

// start express server
const app = express();

// create local port for app to run on
const PORT = process.env.PORT || 3000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server listener on whatever port is available
app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});