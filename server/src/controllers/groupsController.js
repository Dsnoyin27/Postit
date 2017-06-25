const groups = require("../models").groups;
const groupMembers = require("../models").group_members;
const users = require("../models").users;

// create a group
function createGroup(req, res) {
  const { groupname } = req.body;
  const { username } = req.payload;

  if (!groupname) {
    return res.status(400).send({ message: "Enter group name" });
  }

  groups
    .findOne({
      where: {
        groupname
      }
    })
    .then(group => {
      if (group) {
        return res.status(400).send({ message: "Group already exist" });
      }

      groups
        .create({
          groupname,
          username
        })
        .then(group => {
          res.status(201).send({
            groupname,
            groupID: group.id,
            success: true,
            message: "Group created successfully"
          });
        })
        .catch(error => {
          console.error(error);
          res.status(400).send({
            message: "An error occured creating the group."
          });
        });
    });
}

// add member
function addGroupUser(req, res) {
  const { groupID } = req.params;
  const { username } = req.body;

  if (!username || !groupID) {
    return res.status(401).send({ message: "Enter username and group ID" });
  }

  const userPromise = users.findOne({
    where: {
      username
    }
  });

  const groupPromise = groups.findOne({
    where: {
      id: groupID
    }
  });

  const groupMemberPromise = groupMembers.findOne({
    where: {
      username
    }
  });

  Promise.all([userPromise, groupPromise, groupMemberPromise])
    .then(([userToAdd, groupToJoin, groupMember]) => {
      if (!userToAdd) {
        return res.status(400).send({ message: "User does not exist." });
      }

      if (!groupToJoin) {
        return res.status(400).send({ message: "Group does not exist." });
      }

      if (groupMember) {
        return res
          .status(400)
          .send({ message: "User already member of the group." });
      }

      groupMembers
        .create({
          username,
          group_id: groupID
        })
        .then(() =>
          res.status(201).send({
            message: "User Added successfully"
          })
        );
    })
    .catch(error => {
      console.error(error);
      res
        .status(400)
        .send({ message: "The user could not be added to the group." });
    });
}

module.exports = {
  createGroup,
  addGroupUser
};
