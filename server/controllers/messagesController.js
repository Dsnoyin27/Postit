/*const messages = require('../models').messages;

module.exports = {
  createMessage: (req, res) => {
    if (!req.body.messages) {
    	res.send({message: 'Enter  message.'});
    }else {
    	const user_id = req.body.user_id;
    	const message = {
    		body: req.body.messages,
    		group_id: req.body.group_id,
    		user_id: req.body.user_id
    	};
    	messages
      .create({
        messages: req.body.messages,
        user_id: req.body.user_id
      })
      .then(messages => res.status(201).send(
      {message: 'Message sent'

      }))
      .catch(error => res.status(400).send(error));
  }
}
};


  