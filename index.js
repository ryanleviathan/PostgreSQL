require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const Album = require('./models/Album.js');

// Album CRUD Routes
app.post('/albums', (req, res) => {
  Album
    .insert(req.body)
    .then(album => res.send(album));
});

app.get('/albums', (req, res) => {
  Album
    .find()
    .then(albums => res.send(albums));
});

app.get('/albums/:id', (req, res) => {
  Album
    .findById(req.params.id)
    .then(albums => res.send(albums));
});

app.put('/albums/:id', (req, res) => {
  Album
    .update(req.params.id, req.body)
    .then(albums => res.send(albums));
});

app.delete('/albums/:id', (req, res) => {
  Album
    .delete(req.params.id)
    .then(albums => res.send(albums));
});

module.exports = app;
