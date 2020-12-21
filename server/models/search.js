// require mongoose package
const mongoose = require('mongoose');

// create new schema for searches
const SearchSchema = new mongoose.Schema({
    // set up properties for a search
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// create new model of schema
const Search = mongoose.model('Search', SearchSchema);

// export schema out of search.js
module.exports = Search;