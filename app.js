
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const route = require('./server/routes/index');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route); //tell express about routes

 app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Postit API!',
  }));


 

module.exports = app;
