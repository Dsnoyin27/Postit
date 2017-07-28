const users = require("../models/users");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  let token;
  if(authorizationHeader){
    token = authorizationHeader.split(" ")[1];
  }
  // code goes here
  // const token =
  //   (req.body && req.body.access_token) ||
  //   (req.query && req.query.access_token) ||
  //   req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token."
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.payload = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
};
