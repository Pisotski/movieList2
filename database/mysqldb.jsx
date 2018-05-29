var mysql = require('mysql');

//mysql.server start
//mysql -u root -p

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'library'
})

dbConnection.connect((error, data) => { console.log('running from dbConnection'); });

var getMovies = function(callback) {
  var sql = 'SELECT * FROM movielist';
  dbConnection.query(sql, function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
}

var addMovie = function(movie, callback) {
  var sql = `INSERT INTO movielist (title, genre, description) VALUES (?, ?, ?)`;
  dbConnection.query(sql, [movie.title, movie.genre, movie.description], function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
}

var deleteMovie = function(movie, callback) {
  var sql = `DELETE FROM movielist WHERE title = '${movie.title}'`;
  dbConnection.query(sql, function(error, data) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {getMovies, addMovie, deleteMovie};
