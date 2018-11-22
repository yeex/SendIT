'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcels = require('./routes/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

var _parcels3 = require('./models/parcels');

var _parcels4 = _interopRequireDefault(_parcels3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express2.default)();

server.use(_express2.default.json());
server.use(_express2.default.urlencoded({ extended: false }));

server.use('/api/v1/parcels', _parcels2.default);

server.get('/api/v1/users', (req, res) => {
  res.status(200).send(_user2.default);
});
server.get('/api/v1/parcels/:parcelId', (req, res) => {
  const parcel = _parcels4.default.find(c => c.parcelId === parseInt(req.params.parcelId));
  if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
  parcel.name = req.body.name;
  res.send(parcel);
});
server.get('/api/v1/users/:id/parcels', (req, res) => {
  const userParcels = _parcels4.default.filter(item => item.user.id === parseInt(req.params.id, 10));
  res.json({ parcels: userParcels });
});
server.put('/api/v1/parcels/:parcelId/cancel', (req, res) => {
  const parcel = _parcels4.default.find(c => c.parcelId === parseInt(req.params.parcelId));
  if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
  parcel.name = req.body.name;
  const index = _parcels4.default.indexOf(parcel);
  _parcels4.default.splice(index, 1);
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
  _parcels4.default.push(parcel);
  res.send(parcel);
});
server.get('/api/v1/parcels', (req, res) => {
  res.status(200).send(_parcels4.default);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`API server started on ${PORT}`);
});
exports.default = server;