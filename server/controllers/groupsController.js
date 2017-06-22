const groups = require('../models').groups;
const group_users = require('../models').group_users;
const users = require('../models').users;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


// create a group
module.exports = {
    
  createGroup(req, res) {
    groups
    .create({
      groupname: req.body.groupname,
      user_id: req.body.user_id
    })

    .then(user => res.status(201).send({
      success: true,
      message: "Group created successfully",
    }))
    .catch(error => res.status(400).send(error));
  },


  //check
  findGroup(req, res) {
    groups
      .findOne({
        where: {groupname: req.body.groupname}
      })
      .then((group) => {
        if (group) {
          res.send("Group exists");
        } else {
          res.status(400).send("Group does not exist");  
        }
      }); 
        
      
  },

  //add member
  addGroupUser(req, res){
    group_users
      .create({
        group_id: req.body.group_id,
        user_id: req.body.user_id
      })
      .then(group_users => res.status(201).send({
        success: true,
        group_id: message.group_id,
        message: "User Added successfully"
      }))
      .catch(error => res.status(400).send(error));
  },

 //post message
  createMessage(req, res) {
    messages
      .create({
        message_body: req.body.message_body,
        group_id:req.params.id,
        user_id: req.body.user_id
      })

      .then(message => res.status(201).send({
        success: true,
        group_id: message.group_id,
        message: "Message created successfully"
      }))
      .catch(error => res.status(400).send(error));
  },


  //check
  findMessage(req, res) {
    message_body
      .findOne({
        where: {message_body: req.body.message_body}
      })
      .then((message_body) => {
        if (message) {
          res.send(message);
        } else {
          res.status(400).send("Message not found");  
        }
      }); 
        
      
  }
};