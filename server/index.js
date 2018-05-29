/////////////////////////////////////////
/////////////////MySQL///////////////////
/////////////////////////////////////////

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/mysqldb.jsx');

const app = express();
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/movies', function(req, res) {
  db.getMovies(function(err, data) {
    if(err) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  })
});

app.post('/movies', function(req, res) {
  db.addMovie(req.body, function(err, data) {
    if(err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  })
});

app.delete('/movies', function(req, res) {
  db.deleteMovie(req.body, function(err, data) {
    if(err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  })
});

var PORT = PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))

/////////////////////////////////////////
/////////////////MONGO///////////////////
/////////////////////////////////////////

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const db = require('../database/mongoosedb.jsx')

// const app = express()
// app.use('/', express.static(path.join(__dirname, '../client/dist')))
// app.use(bodyParser.json());

// app.get('/movies', function(req, res) {
//   db.Movie.find((err, data) => {
//     err ? res.status(500) : res.status(200).send(data);
//   });
// });

// app.post('/movies', function(req, res) {
//   db.save(req.body, (err, data) => {

//     err ? res.status(500) :  res.status(201).send();
//   });
// });

// app.delete('/movies', function(req, res) {
//   db.Movie.remove(req.body, (err) => {
//     err ? res.status(500) : res.status(204).send();
//   });
// });

// var PORT = PORT || 3000;
// app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))