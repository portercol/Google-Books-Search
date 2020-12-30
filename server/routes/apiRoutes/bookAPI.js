// import express router and controller handling books
const router = reequire('express').Router();
const bookController = require('../../controller/books');

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