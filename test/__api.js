var expect = require('chai').expect();
var request = require('supertest');

describe('API', () => {
  var server;

  beforeEach(() => {
    server = require('../src/server.js')
  });

  afterEach(() => {
    server.close();
  });

  it('/status Should return specified object healthy:true.', (done) => {
    request(server)
    .get('/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const status = res.body;

      // Save one single url from the list to test on in later tests
      this.status = {healthy: true}

      expect(status.length).to.be.above(0)
    })
    .end(done);
  });
  // Proves V1 is working
  it('/api/status Should return specified object healthy:true.', (done) => {
    request(server)
    .get('/api/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true })
    .end(done);
  });
  // Proves V2 is working
  it('/v2/status Should return specified object healthy:true.', (done) => {
    request(server)
    .get('/api/v2/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true })
    .end(done);
  });
  // Proves /go is working
  it('/go/status Should return specified object healthy:true.', (done) => {
    request(server)
    .get('/go/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true })
    .end(done);
  });

});
