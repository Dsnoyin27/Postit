
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
//  app.post('api/users', (req, res) => res.status(200).send({
//   message: 'Welcome.',
//  }));

// //require('./server/routes')(app);
//  app.post('/api/users/signup', usersController.create);
//  // message: 'Successfully Welcome.',
//  //};

module.exports = app;
