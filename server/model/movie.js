const mongoose = require('mongoose');

// Define movie schema with fields
const movieSchema = new mongoose.Schema({
    Title: String,          // Movie title
    Genre: String,          // Genre of the movie
    ReleaseYear: String,    // Year of release
    Rating: String,         // Movie rating
    Description: String,    // Description of the movie
    Status: String          // Status
}, {
    collection: 'movies'    // MongoDB collection name
});

// Create and export the movie model
module.exports = mongoose.model('Movie', movieSchema);
