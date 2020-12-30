// import express router and bookAPI file
const router = require('express').Router();
const apiBookRoute = require('./bookAPI');

// routes for books
router.use('/books', apiBookRoute);

// export router from index.js
module.exports = router;