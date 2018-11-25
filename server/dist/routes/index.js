'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

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
  server.get('/api/v1/parcels', (req, res) => {
    res.status(200).send(_parcels2.default);
  });
};

exports.default = routes;