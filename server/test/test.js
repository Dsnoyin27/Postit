

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
//Require the dev-dependencies
const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let app = require('./app.js');
const User = require('./server/models').User;
let should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

});


//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        Users.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /POST route
  */


  describe('/POST /api/user/signup', () => {
      it('it should POST a successfully signed up user', (done) => {
        let user = {
            username: "oyinda",
            email: "dsnoyin27@yahoo.com",
            password: 111,
            confirmPassword:111
        }
        chai.request(server)
            .post('/api/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.should.have.property('message').eql('User has been signed up successfully');
              done();
            });
      });

  });
});

describe('/POST /api/user/signin', () => {
      it('it should signin a successfully signed up user', (done) => {
        let user = {
            username: "oyinda",
            email: "dsnoyin27@yahoo.com",
            password: 111
        }
        chai.request(server)
            .post('/api/user/signin')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.should.have.property('message').eql('User successfully signed in');
              done();
            });
      });

  });


describe('status 401', () => {
    it('it should throw error for invalid credentials', (done) => {
      const user = {
        username: "oy",
        password: '11'
      };
      chai.request(server)
        .post('/api/user/signin')
          .send(user)
          .end((err, res) => {
            res.status.should.equal(401);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Ivalid Credentials');
            done();
          });
    });
});

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
//Require the dev-dependencies
const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let app = require('../app/server/app.js');
let Users = require('../src/models/users');
let should = chai.should();

chai.use(chaiHttp);



//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        Users.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /POST route
  */


  describe('/POST /api/user/signup', () => {
      it('it should POST a successfully signed up user', (done) => {
        let user = {
            username: "oyinda",
            email: "dsnoyin27@yahoo.com",
            password: 111,
            confirmPassword:111
        }
        chai.request(server)
            .post('/api/user/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.should.have.property('message').eql('User has been signed up successfully');
              done();
            });
      });

  });
});

describe('/POST /api/user/signin', () => {
      it('it should signin a successfully signed up user', (done) => {
        let user = {
            username: "oyinda",
            email: "dsnoyin27@yahoo.com",
            password: 111
        }
        chai.request(server)
            .post('/api/user/signin')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.should.have.property('message').eql('User successfully signed in');
              done();
            });
      });

  });


describe('status 401', () => {
    it('it should throw error for invalid credentials', (done) => {
      const user = {
        username: "oy",
        password: '11'
      };
      chai.request(server)
        .post('/api/user/signin')
          .send(user)
          .end((err, res) => {
            res.status.should.equal(401);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Ivalid Credentials');
            done();
          });
    });
});
