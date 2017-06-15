const usersController = require('../controllers').users;

module.exports = (app) => {
  app.post('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Postit API!',
  }));

  app.post('/api/users/signup', usersController.create); 
  app.post('/api/users/signin', usersController.create);
  
};




/*
  	 let un = document.loginform.usr.value;
     let pw = document.loginform.pword.value;
     let em = document.loginform.email.value;
     let username = "username";
     let email = "email";
     let password = "password";
     if ((un == username) && (pw == password) && (em == email)) {
     	window.location = "main.html";
            return ("You are already a member");
    }    else {
            console.log ("Sign up successful, welcome to Postit");
};

  };


  app.post('/api/users/signin', ( req, res) =>{
  	 let un = document.loginform.usr.value;
     let pw = document.loginform.pword.value;
     let username = "username";
     let password = "password";
     if ((un == username) && (pw == password)) {
     	window.location = "main.html";
            return ("You have successfully logged in");
    }    else {
            console.log ("Login was unsuccessful, please check your username and password")
        }

  app.post('/api/group', ( req, res) =>{}
  app.post('/api/users/signin', ( req, res) =>{}
  app.post('/api/group/<group id>/message', ( req, res) =>{}
  app.get('/api/group/<group id>/messages', ( req, res) =>{}


};  */
