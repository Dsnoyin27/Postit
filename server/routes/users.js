/*const express = require('express');
const usersController = require('../controllers/usersController');
const auth = require('../controllers/auth.js');


const router = express.Router();

router.route('/api/users/signup').post (usersController.signup);
router.route('/api/users/signin').post (usersController.signin);

module.exports = router;
