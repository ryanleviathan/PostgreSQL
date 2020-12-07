const express = require('express');
const app = express();
const Car = require('./lib/models/Car.js');
const Album = require('./lib/models/Album.js');
const Bike = require('./lib/models/Car.js');
const House = require('./lib/models/Car.js');
const Phone = require('./lib/models/Car.js');

// Album
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

app.post('/albums', (req, res) => {
  Album
    .update(req.body.id)
    .then(albums => res.send(albums));
});

app.delete('/albums', (req, res) => {
  Album
    .delete(req.body.id)
    .then(albums => res.send(albums));
});

// Bike
app.post('/bikes', (req, res) => {
  Bike
    .insert(req.body)
    .then(bike => res.send(bike));
});

app.get('/bikes', (req, res) => {
  Bike
    .find()
    .then(bikes => res.send(bikes));
});

app.post('/bikes', (req, res) => {
  Bike
    .update(req.body.id)
    .then(bikes => res.send(bikes));
});

app.delete('/bikes', (req, res) => {
  Bike
    .delete(req.body.id)
    .then(bikes => res.send(bikes));
});

// Car
app.post('/cars', (req, res) => {
  Car
    .insert(req.body)
    .then(car => res.send(car));
});

app.get('/cars', (req, res) => {
  Car
    .find()
    .then(cars => res.send(cars));
});

app.post('/cars', (req, res) => {
  Car
    .update(req.body.id)
    .then(car => res.send(car));
});

app.delete('/cars', (req, res) => {
  Car
    .delete(req.body.id)
    .then(car => res.send(car));
});

// House
app.post('/houses', (req, res) => {
  House
    .insert(req.body)
    .then(house => res.send(house));
});

app.get('/houses', (req, res) => {
  House
    .find()
    .then(houses => res.send(houses));
});

app.post('/houses', (req, res) => {
  House
    .update(req.body.id)
    .then(houses => res.send(houses));
});

app.delete('/houses', (req, res) => {
  House
    .delete(req.body.id)
    .then(houses => res.send(houses));
});

// Phone
app.post('/phones', (req, res) => {
  Phone
    .insert(req.body)
    .then(phone => res.send(phone));
});

app.get('/phones', (req, res) => {
  Phone
    .find()
    .then(phones => res.send(phones));
});

app.post('/phones', (req, res) => {
  Phone
    .update(req.body.id)
    .then(phones => res.send(phones));
});

app.delete('/phones', (req, res) => {
  Phone
    .delete(req.body.id)
    .then(phones => res.send(phones));
});

module.exports = app;
