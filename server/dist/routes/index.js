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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = server => {
  server.get('/api/v1/users', (req, res) => {
    res.status(200).send(_user2.default);
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
  server.put('/api/v1/parcels/:parcelId/cancel', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    if (parcel.status === 'cancelled') return res.send('Parcel already cancelled!');
    if (parcel.status === 'delivered') return res.send('Parcel cannot be cancelled!');
    parcel.status = 'cancelled';
    res.send(parcel);
  });
  server.post('/api/v1/parcels', (req, res) => {
    const parcel = {
      parcelId: 76,
      user: {
        id: 7
      },
      parcelName: 'Iphone XR',
      status: 'in transit',
      location: 'Uganda',
      destination: 'Kenya',
      weight: 10,
      price: 200
    };
    _parcels2.default.push(parcel);
    res.send(parcel);
  });
  server.post('/api/v1/parcels/:parcelId/destination', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.destination = req.body.destination;
    return res.send(parcel);
  });
  server.put('/api/v1/parcels/:parcelId/status', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.status = req.body.status;
    return res.send(parcel);
  });
  server.put('/api/v1/parcels/:parcelId/location', (req, res) => {
    const parcel = _parcels2.default.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.location = req.body.location;
    return res.send(parcel);
  });
  server.post('/api/v1/auth/posts', verifyToken, (req, res) => {
    _jsonwebtoken2.default.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post created.',
          authData
        });
      }
    });
  });
  server.post('/api/v1/auth/login', (req, res) => {
    const legitUser = _user2.default.find(c => c.userName === req.body.userName && c.password === req.body.password);
    if (!legitUser) {
      return res.status(404).send({ message: 'No match' });
    }
    return _jsonwebtoken2.default.sign({ legitUser }, 'secretkey', (err, token) => {
      res.json({
        token,
        User: legitUser
      });
    });
  });
  // Verify token
  function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
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