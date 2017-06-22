/*

const groups = require('../models').groups;
const group_users = require('../models').group_users;
const users = require('../models').users;


// create a group
module.exports = {
  create(req, res) {
    groups
      .create({
      	groupname: req.body.groupname,
        user_id: req.body.user_id
      })
      .then(group => res.status(201).send({
      	success: true,
      	groupname: group.groupname,
      	groupBy: group.user_id,
      	message: 'Group was successfully created'
      	
      }))
      if (!req.body.groupname){
      	res.status(400).send({message: 'Enter group name'})
      } else{
      	groups.findOne({
      	  where: {
      	    groupname: req.body.group_name
      		},
      	})
      .then(group => {
      	if (group) {
      	   res.send("Group exists");
      	} else{
      		groups.create(groups)
      	}

  })
 }

}
};
    

      
       
       const groups = require('../models').groups;
const group_users = require('../models').group_users;
const messages = require('../models').messages;
const users = require('../models').users;


// create a group
module.exports = {
  create(req, res) {
    groups
      .create({
      	groupname: req.body.groupname,
        user_id: req.body.user_id
      })
      
      if (!req.body.groupname){
      	res.status(400).send({message: 'Enter group name'})
      } else{
      	groups.findOne({
      	  where: {
      	    groupname: req.body.group_name
      		},
      	})
      .then(group => {
      	if (group) {
      	   res.status(400).send({message: "Group exists"});
      	} else{
      		groups.create(groups)
      		.then(group => res.status(201).send({
            success: true,
            message: 'Group has been created successfully',
            groupname: group.groupname
          }))
          .catch(error => res.status(400).send(error));
      	}

  })
 }
 //Add users to group
 
  create(req, res) 
    groups
      .create({
       group_id: req.body.group_id,
       user_id: req.body.user_id
    })

    if (!req.body.username) {
      res.status(400).send({
      	message: 'Enter user name' });
    } else {
      users.findOne({
        where: {
          username: req.body.username
        },
      })
      .then((user) => {
        if (user) {
          group_users.findOne({
            where: {
              user_id: req.body.user_id
            },
          })
          .then((group_user) => {
            if (group_user) {
              res.status(400).send({
              	message: 'User exist in this group' });
            } 
          });
        } else {
          res.status(404).send({message: 'User does not exist' });
        }
      });
    }
}

//create messages
 create(req, res) {
    messages
      .create({
      	meaasage_body: req.body.message_body,
        group_id: req.body.group_id,
        user_id: req.body.user_id
      })
      
        if (!req.body.message) {
        res.send({ message: 'Type message here.' });
      } else {
        .then(message => res.status(201).send({
        message: 'Message sent',
        message_body: req.body.message_body
      }))
      .catch(error => res.status(400).send(error));
    }
  },

  // get messages
  get(req, res) {
  	messages
    if (req.body.group_id) {
      messages.findAll({
        where: {
          group_id: req.body.group_id
        },
      })
      .then((message) => {
        if (message) {
          res.status(200).send({ message });
        } else if (JSON.stringify(message) === '{}') {
          res.status(404).send({ message: 'Message not found' });
          else{
          	return "Invalid"
          }
        }
      });
    }
  }
};
  };

const groups = require('../models').groups;
const group_users = require('../models').group_users;
const messages= require('../models').messages;
const users = require('../models').users;


module.exports = {
  // create new group
  createGroup: (req, res) => {
      groupname: req.body.groupname,
      user_id = req.body.user_id
    if (!req.body.groupname) {
      res.status(400).send({ 
      	message: 'Enter group name.' });
    } else {
      groups.findOne({
        where: {
          groupname: req.body.groupname
        },
      })
      .then((group) => {
        if (group) {
          res.status(400).send({ 
          	message: 'Group exists' });
        } else {
          groups
          .create(groups)
          .then(group => res.status(201).send({
            message: 'Group was successfully created',
            groupname: group.groupname
          }))
          .catch(error => res.status(400).send(error));
        }
      });
    }
  },

  // add group users
  addGroupUsers: (req, res) => {
    if (!req.body.username) {
      res.status(400).send({ 
      	message: 'Enter a username' });
    } else {
      User.findOne({
        where: {
          username: req.body.username
        },
      })
      .then((user) => {
        if (user) {
          group_users.findOne({
            where: {
              user_id: req.body.user_id
            },
          })
          .then((group_user) => {
            if (group_user) {
              res.status(400).send({ 
              	message: 'User exists' });
            } else {
                group_id: req.params.group_id,
                user_id = req.params.user_id
              };
              group_users.create(details)
              .then(group_user => res.status(201).send({
                message: 'User successfully added to this group',
              }))
              .catch(error => res.status(400).send(error));
          });
        } else {
          res.status(404).send({
          	message: 'User does not exist' });
        }
      });
    }
  },

  // post message to group
  postMessages: (req, res) => {
    if (!req.body.message_body) {
      res.send({
      	message: 'Message is required.' });
    } else {
        message_body: req.body.message_body,
        group_id = req.params.group_id,
        user_id = req.params.user_id
      };
      messages.create(messages)
      .then(message => res.status(201).send({
        message: 'Message sent'
      }))
      .catch(error => res.status(400).send(error));
    }
  };


workin user
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
        password: req.body.password
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


      