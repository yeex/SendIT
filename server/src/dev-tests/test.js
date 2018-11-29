/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import users from '../models/user';
import server from '../index';

const { expect, assert } = chai;
chai.use(chaiHttp);

describe('SendIT Test', () => {
  it('should return true', () => {
    const isTrue = true;
    expect(isTrue).to.be.true;
  });

  it('should be an array using expect', () => {
  	expect(users).to.be.an('array');
  });

  it('should be an array using assert', () => {
  	assert.isArray(users, 'must be an array');
  });
});
describe('GET /parcels', (done) => {
  it('Get all parcels orders', (done) => {
    chai.request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      });
  });
});
describe('GET /parcels/:parcelId', () => {
  it('Get a specified parcel ID', (done) => {
    chai.request(server)
      .get('/api/v1/parcels/32')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done(err);
      });
  });

  it('No valid parcel ID', (done) => {
    chai.request(server)
      .get('/api/v1/parcels/1')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      });
  });
});

describe('PUT /parcels/:parcelId/cancel', () => {
  it('Cancel a specified parcel order', (done) => {
    chai.request(server)
      .put('/api/v1/parcels/32/cancel')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done(err);
      });
  });

  it('Parcel ID invalid to cancel', (done) => {
    chai.request(server)
      .put('/api/v1/parcels/3/cancel')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.empty;
        done(err);
      });
  });

  it('Cancelled parcel ID order status to cancelled', (done) => {
    chai.request(server)
      .put('/api/v1/parcels/32/cancel')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.empty;
        done(err);
      });
  });
});
