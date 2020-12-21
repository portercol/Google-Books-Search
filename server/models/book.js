// require mongoose package
const mongoose = require('mongoose');

// create new schema for searches
const BookSchema = new mongoose.Schema({
    // set up properties for a search
    image: String,
    title: { type: String, required: true },
    authors: { type: String, required: true },
    published: String,
    pageCount: String,
    bookID: { type: String, required: true },
    description: String
});

// create new model of schema
const Book = mongoose.model('Book', BookSchema);

// export schema out of Book.js
module.exports = Book;