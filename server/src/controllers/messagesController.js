const messages = require("../models").messages;

// post message
function postMessage(req, res) {
  const { username } = req.payload;
  const { messageBody } = req.body;
  const { groupID } = req.params;

  messages
    .create({
      username,
      group_id: groupID,
      message_body: messageBody
    })
    .then(message =>
      res.status(201).send({
        message: message.message_body
      })
    )
    .catch(error => {
      console.error(error);
      res.status(400).send({
        message: "Your message could not be sent."
      });
    });
}

// check
function getMessage(req, res) {
  const { groupID } = req.params;
  messages
    .findAll({
      where: { group_id: groupID }
    })
    .then(message => {
      if (message) {
        res.send(message);
      } else {
        res.status(400).send("Message not found");
      }
    });
}

module.exports = {
  getMessage,
  postMessage,
};
