'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-expressions */
const { expect, assert } = _chai2.default;
_chai2.default.use(_chaiHttp2.default);

describe('SendIT Test', () => {
  it('should return true', () => {
    const isTrue = true;
    expect(isTrue).to.be.true;
  });

  it('should be an array using expect', () => {
    expect(_user2.default).to.be.an('array');
  });

  it('should be an array using assert', () => {
    assert.isArray(_user2.default, 'must be an array');
  });
});
describe('GET /parcels', done => {
  it('Get all parcels orders', done => {
    _chai2.default.request(_index2.default).get('/api/v1/parcels').end((err, res) => {
      expect(res.status).to.equal(404);
      expect(res.body).to.be.empty;
      done(err);
    });
  });
});
describe('GET /parcels/:parcelId', () => {
  it('Get a specified parcel ID', done => {
    _chai2.default.request(_index2.default).get('/api/v1/parcels/32').end((err, res) => {
      expect(res.status).to.equal(200);
      done(err);
    });
  });

  it('No valid parcel ID', done => {
    _chai2.default.request(_index2.default).get('/api/v1/parcels/1').end((err, res) => {
      expect(res.status).to.equal(404);
      expect(res.body).to.be.empty;
      done(err);
    });
  });
});

describe('PUT /parcels/:parcelId/cancel', () => {
  it('Cancel a specified parcel order', done => {
    _chai2.default.request(_index2.default).put('/api/v1/parcels/32/cancel').end((err, res) => {
      expect(res.status).to.equal(200);
      done(err);
    });
  });

  it('Parcel ID invalid to cancel', done => {
    _chai2.default.request(_index2.default).put('/api/v1/parcels/3/cancel').end((err, res) => {
      expect(res.status).to.equal(404);
      expect(res.body).to.be.empty;
      done(err);
    });
  });

  it('Cancelled parcel ID order status to cancelled', done => {
    _chai2.default.request(_index2.default).put('/api/v1/parcels/32/cancel').end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.empty;
      done(err);
    });
  });
});