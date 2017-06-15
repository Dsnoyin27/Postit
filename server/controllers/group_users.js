const group_users = require('../models').group_users;

module.exports = {
  create(req, res) {
    return group_users
      .create({
        group_users: req.body.group_users,
      })
      .then(group_users => res.status(201).send(group_users))
      .catch(error => res.status(400).send(error));
  },
};