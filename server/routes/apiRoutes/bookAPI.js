// import express router and controller handling books
const router = require('express').Router();
const bookController = require('../../controller/books');

router.get('/', (req, res) => {
    console.log("Hello world2.0");
    res.json("hello world2.0")
  })

router.get('/', (req, res) => {
    console.log("Hello world");
    res.json("hello world")
  })

// route hit for books
router.route('/')
    .get(bookController.findAll)
    .post(bookController.create);

// route hit for book with specific ID
router.route('/:id')
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

// export router from bookAPI.js
module.exports = router;