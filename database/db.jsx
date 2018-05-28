const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/library');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection open');
});

var movieSchema = mongoose.Schema({
  title: { type: String, unique: true, dropDups: true},
  genre: String,
  description: String
})

movieSchema.plugin(uniqueValidator);

var Movie = mongoose.model('Movie', movieSchema);

let save = function(movie) {
  var newMovie = new Movie({
    title: movie.title,
    genre: movie.genre,
    description: movie.description
  });

  Movie.create(newMovie, (err, data) =>
    err ? console.log(err.message) : console.log(newMovie.title, ' movie saved'));
}

module.exports = {save}