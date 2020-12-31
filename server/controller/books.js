// create var to store all models data
const db = require('../models');

// create function to export out of books.js
module.exports = {
  // use findAll to find all books
  findAll: function(req, res) {
    db.Book
      .find(req.body)
      .sort({ date: -1 })
      .then(bookModel => res.json(bookModel))
      .catch(err => res.status(404).json(err));
  },
  // use findById to find specific book by ID
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(bookModel => res.json(bookModel))
      .catch(err => res.status(404).json(err));
  },
  // use create to create a new book
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(bookModel => res.json(bookModel))
      .catch(err => res.status(404).json(err));
  },
  // use update to find book by ID and update/save
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(bookModel => res.json(bookModel))
      .catch(err => res.status(404).json(err));
  },
  // use remove to find book by ID and delete
  remove: function(req, res) {
    db.Book
      .deleteOne({ bookID: req.params.id })
      .catch(err => res.status(404).json(err));
  }
};