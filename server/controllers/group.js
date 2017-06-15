const groups = require('../models').groups;

module.exports = {
  create(req, res) {
    return groups
      .create({
        groups: req.body.groups,
      })
      .then(groups => res.status(201).send(groups))
      .catch(error => res.status(400).send(error));
  },
};