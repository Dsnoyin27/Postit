const messages = require('../models').messages;

module.exports = {
  create(req, res) {
    return messages
      .create({
        messages: req.body.group_users,
      })
      .then(messages => res.status(201).send(messages))
      .catch(error => res.status(400).send(error));
  },
};