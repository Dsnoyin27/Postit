const users = require('../models').users;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  //create user
  signup(req, res) {
    users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)
      })

      .then(user => res.status(201).send({
        success: true,
        message: "User has been signed up successfully",
        username: user.username
      }))
      .catch(error => res.status(400).send(error));
  },


  //user signin
  signin(req, res) {
    users
      .findOne({
        where: {username: req.body.username}
      })
      .then((user) => {
        if (user) {
          res.send("User exists");
        } else {
          res.status(400).send("User does not exist");  
        }
      }); 
        

      // .then(user => res.status(201).send(user))
      // .catch(error => res.status(400).send(error));
      
  },
};


      