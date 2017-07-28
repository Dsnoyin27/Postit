const Users = require('../models').users;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

const express = require('express');

let router = express.Router();

function signToken(obj) {
  return jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: '60 days' // 60 days
  });
}

router.post('/', (req, res) => {
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }
  }, 5000);
});

function signup(req, res) {
  const { username, email, password, confirmPassword } = req.body;

  Users.findOne({
    where: {
      $or: {
        email,
        username: username.toLowerCase()
      }
    }
  }).then(user => {
    if (user) {
      return res
        .status(401)
        .send({ message: 'Account already exists, please signin' });
    }

    Users.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt)
    })
      .then(user => {
        const token = signToken({ username });
        res.status(201).json({
          token,
          success: true,
          message: 'User has been signed up successfully',
          username: user.username
        });
      })
      .catch(error => res.status(400).send(error));
  });
}

function signin(req, res) {
  const { username, password } = req.body;
  Users.findOne({
    where: {
      username: username.toLowerCase()
    }
  }).then(user => {
    if (!user) {
      return res.status(401).send({
        errors: {
          success: false,
          form: 'Invalid Credentials'
        }
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({
        errors: {
          success: false,
          message: 'Invalid Credentials'
        }
      });
    }

    const { username } = user;
    const token = signToken({ username });
    res.status(201).send({
      token,
      success: true,
      message: 'User successfully signed in!'
    });
  });
}

module.exports = {
  signin,
  signup
};
