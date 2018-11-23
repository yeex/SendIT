'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { expect, assert } = _chai2.default; /* eslint-disable no-unused-expressions */

_chai2.default.use(_chaiHttp2.default);

describe('Our first test', () => {
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