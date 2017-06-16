# Postit
Description
Postit is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.
Pre-requisites
     NodeJS-Express-Postgres
     ReactJS (Redux)
    Postman
Installation
•	Copy the project path from repo
•	In your terminal run git clone project path
•	cd into the project root
•	In the project root run npm install to install dependencies
•	To start app sequelize db:migrate

Testing with Postman
•	Create a user [POST] http://localhost:8080/api/user/signup
•	Login the said user [POST] http://localhost:8080/api/users/login.
Routes
users: POST: /api/user/signup
POST: /api/user/signin
POST: /api/group
POST:/api/group/group:id/message
GET:/api/group/group:id/messages
1. create: POST
 http://localhost:8000/api/users/signup

2. signin: POST
http://localhost:8000/api/users/signin
3. create: POST
http://localhost:8000/api/group
find-one : GET
update-one : PUT
delete-one : DELETE
4. http://localhost:8000/api/groups/:group_id
find-documents-user : GET
roles description contains a link to the app on heroku



