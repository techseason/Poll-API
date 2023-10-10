const express = require('express');
const connection = require("./connection");
const pollsRoute = require('./routes/polls')
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/polls', pollsRoute);

module.exports = app;