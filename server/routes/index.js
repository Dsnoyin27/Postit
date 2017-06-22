const usersController = require('../controllers/usersController');
const groupsController = require('../controllers/groupsController');
const express = require('express');

const router= express.Router();

router.post('/api/user/signup', usersController.signup); 
router.post('/api/user/signin', usersController.signin);
router.post('/api/group', groupsController.createGroup);
router.post('/api/group/:group_id', groupsController.createMessage);
router.post('/api/group/:group_id/message', groupsController.addGroupUser);
router.get('/api/group/:group_id/messages', groupsController.findMessage);

module.exports = router;

  


