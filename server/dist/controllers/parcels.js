'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parcels = require('../models/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parcels = (req, res) => {
  res.send(_parcels2.default);
};

exports.default = parcels;