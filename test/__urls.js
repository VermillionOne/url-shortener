/* global server */
/* eslint-env mocha*/

const expect = require('chai').expect;
const request = require('supertest');

const utility = require('../lib/utility');
const srv = require('../src/server.js');

describe('URL Routes', () => {
  let server;
  beforeEach(() => {
    server = srv;
    utility.debug(server, 'beforeEach()');
  });
  afterEach(() => {
    server.close();
  });
  // Test for Multiple Apps
  it('GET /api/v2/urls returns multiple urls', (done) => {
    request(server)
    .get('/api/v2/urls')
    .set('Accept', 'urllication/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const urls = res.body;
      // Save one single url from the list to test on in later tests
      this.url = urls[0];
    })
    .end(done);
  });
  // Test for a single url
  it('GET /api/v2/urls/:id returns an url obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get(`/api/v2/urls/${this.url.id}`)
      .set('Accept', 'urllication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const url = res.body;
        expect(url).to.have.property('id');
        expect(url).to.have.property('originalUrl');
        expect(url).to.have.property('shortUrl');
        expect(url).to.have.property('urlName');
        expect(url).to.have.property('createdAt');
        expect(url).to.have.property('updatedAt');
        expect(url).to.have.property('userID');
      })
    .end(done);
  });
});
