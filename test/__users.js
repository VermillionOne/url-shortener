/* global server */
/* eslint-env mocha*/

const expect = require('chai').expect;
const request = require('supertest');

describe('User Routes', () => {
  const server;
  const user;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Users
  it('GET /api/v2/users returns multiple users', (done) => {
    request(server)
    .get('/api/v2/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const users = res.body;

      // Save one single user from the list to test on in later tests
      this.user = users[0]

      expect(users.length).to.be.above(0)
    })
    .end(done)
  });

  // Test for a single user
  it('GET /api/v2/users/:id returns an user obj with a id and name property', (done) => {
    request(server)
      .get('/api/v2/users/' + this.user.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const user = res.body;
        expect(user).to.have.property('id')
        expect(user).to.have.property('firstName')
        expect(user).to.have.property('lastName')
        expect(user).to.have.property('name')
        expect(user).to.have.property('userName')
        expect(user).to.have.property('createdAt')
        expect(user).to.have.property('updatedAt')
      })
      .end(done)
  });

});
