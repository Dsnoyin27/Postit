const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const groupsController = require("../controllers/groupsController");
const messagesController = require("../controllers/messagesController");
const jwtauth = require("../helpers/jwt-auth");



/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/user/signup", usersController.signup);
router.post("/user/signin", usersController.signin);

router.post("/group", jwtauth, groupsController.createGroup);
router.post("/group/:groupID", jwtauth, groupsController.addGroupUser);

router.post(
  "/group/:groupID/message",
  jwtauth,
  messagesController.postMessage
);
router.get("/group/:groupID/messages", jwtauth, messagesController.getMessage);

module.exports = router;
