const users = require('../models').users;

module.exports = {
  create(req, res) {
    return users
      .create({
      	username: req.body.username,
      	email: req.body.email,
      	password: req.body.password,
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  },
};
