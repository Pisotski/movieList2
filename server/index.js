const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/db.jsx')

const app = express()
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use(bodyParser.json());

var collection = [
  {title: 'Game Of Thrones'}, 
  {title: 'Silence Of The Lambs'}, 
  {title: 'One Flew Over the Cuckoo\'s Nest'}
  ];

app.get('/movies', function(req, res) {
  db.Movie.find((err, data) => {
    err ? res.status(500) : res.status(200).send(data);
  })
});

app.post('/movies', function(req, res) {
  db.save(req.body);
  // collection.push(req.body);
  res.status(201).send();
  })

var PORT = PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))