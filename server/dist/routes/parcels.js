'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcels = require('../controllers/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parcelsRouter = _express2.default.Router();

parcelsRouter.get('/parcels', _parcels2.default);
parcelsRouter.get('/parcels/:id', _parcels2.default);
parcelsRouter.get('/users/:id/parcels', _parcels2.default);
parcelsRouter.put('/parcels/:id/cancel', _parcels2.default);
parcelsRouter.post('/parcels', _parcels2.default);

exports.default = parcelsRouter;