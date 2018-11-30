'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _parcels = require('../models/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

var _db = require('../db/');

var _db2 = _interopRequireDefault(_db);

var _query = require('../db/query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const routes = server => {
  server.get('/api/v1/users', (req, res) => {
    res.status(200).send(_query2.default.users);
  });
  server.get('/api/v1/parcels/:parcelId', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.name = req.body.name;
    res.send(parcel);
  });
  server.get('/api/v1/users/:id/parcels', (req, res) => {
    const userParcels = _parcels2.default.filter(item => item.user.id === parseInt(req.params.id, 10));
    res.json({ parcels: userParcels });
  });
  server.post('/api/v1/parcels', (req, res) => {
    const data = [req.body.parcelId, req.body.id, req.body.parcelname, req.body.status, req.body.location, req.body.destination, req.body.weight, req.body.price];
    _parcels2.default.push(data);
    res.send(_parcels2.default);
  });
  server.put('/api/v1/parcels/:parcelId/cancel', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    if (parcel.status === 'cancelled') return res.send('Parcel already cancelled!');
    if (parcel.status === 'delivered') return res.send('Parcel cannot be cancelled!');
    parcel.status = 'cancelled';
    res.send(parcel);
  });
  server.post('/api/v1/parcels/:parcelId/destination', verifyToken, (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
      const parcelid = req.params.parcelId;
      const data = [req.body.id, req.body.destination, parcelid];
      const result = yield (0, _db2.default)(_query2.default.destination, data);
      if (result) {
        res.status(400).send({
          success: true
        });
      }
      if (!result) return res.status(404).send('The parcel with the given ID was not found.');
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());
  server.put('/api/v1/parcels/:parcelId/status', verifyToken, (() => {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      const parcelid = req.params.parcelId;
      const data = [req.body.status, req.body.id, parcelid];
      const result = yield (0, _db2.default)(_query2.default.status, data);
      if (result) {
        res.status(201).send({
          success: true
        });
      }
      if (!result) return res.status(404).send('The parcel with the given ID was not found.');
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })());
  server.put('/api/v1/parcels/:parcelId/location', verifyToken, (() => {
    var _ref3 = _asyncToGenerator(function* (req, res) {
      const parcelid = req.params.parcelId;
      const data = [req.body.id, req.body.location, parcelid];
      const result = yield (0, _db2.default)(_query2.default.location, data);
      if (result) {
        res.status(201).send({
          success: true
        });
      }
      if (!result) return res.status(404).send('The parcel with the given ID was not found.');
    });

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })());
  server.post('/api/v1/auth/signup', (() => {
    var _ref4 = _asyncToGenerator(function* (req, res) {
      const data = [req.body.firstname, req.body.lastname, req.body.password, req.body.username, req.body.email, req.body.usertype];
      const result = yield (0, _db2.default)(_query2.default.register, data);
      if (result.rows[0]) {
        const record = result.rows[0];
        res.status(400).send({
          success: true, user: record.id
        });
      }
      return res.status(201).send({
        message: 'This username already exists'
      });
    });

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })());
  server.post('/api/v1/auth/login', (() => {
    var _ref5 = _asyncToGenerator(function* (req, res) {
      const data = [req.body.username, req.body.password];
      const result = yield (0, _db2.default)(_query2.default.login, data);
      const output = result.rows[0];
      if (!result) {
        return res.status(404).send({ message: 'No match' });
      }
      return _jsonwebtoken2.default.sign({ result }, 'secretkey', function (err, token) {
        res.json({
          token,
          User: output.username
        });
      });
    });

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  })());
  // Verify token
  function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at space
      const bearer = bearerHeader;
      // Get token from array
      const bearerToken = bearer[0];
      // Set token
      req.token = bearerToken;
      // Call next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
};

exports.default = routes;