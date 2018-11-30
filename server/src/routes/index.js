import express from 'express';
import jwt from 'jsonwebtoken';
import users from '../models/user';
import parcels from '../models/parcels';
import execute from '../db/';
import query from '../db/query';

const routes = (server) => {
  server.get('/api/v1/users', (req, res) => {
      res.status(200).send(query.users);
  });
  server.get('/api/v1/parcels/:parcelId', (req, res) => {
      const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
      if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
      parcel.name = req.body.name;
      res.send(parcel);
  });
  server.get('/api/v1/users/:id/parcels', (req, res) => {
      const userParcels = parcels.filter(item => item.user.id === parseInt(req.params.id, 10));
      res.json({ parcels: userParcels });
  });
  server.put('/api/v1/parcels/:parcelId/cancel', (req, res) => {
      const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
      if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
      if (parcel.status === 'cancelled') return res.send('Parcel already cancelled!');
      if (parcel.status === 'delivered') return res.send('Parcel cannot be cancelled!');
      parcel.status = 'cancelled';
      res.send(parcel);
  });
  server.post('/api/v1/parcels/:parcelId/destination', verifyToken, async (req, res) => {
    const parcelid = req.params.parcelId;
    const data = [
      req.body.id,
      req.body.destination,
      parcelid
    ];
    const result = await execute(query.destination, data);
      if (result) {
        res.status(400).send({
        success: true, 
      });
    }
    if (!result) return res.status(404).send('The parcel with the given ID was not found.');
  });
  server.put('/api/v1/parcels/:parcelId/status', verifyToken, async (req, res) => {
    const parcelid = req.params.parcelId;
    const data = [
      req.body.status,
      req.body.id,
      parcelid
    ];
    const result = await execute(query.status, data);
      if (result) {
        res.status(201).send({
          success: true,
        });
      }
    if (!result) return res.status(404).send('The parcel with the given ID was not found.');
  });
  server.put('/api/v1/parcels/:parcelId/location', verifyToken, async (req, res) => {
    const parcelid = req.params.parcelId;
    const data = [
      req.body.id,
      req.body.location,
      parcelid
    ];
    const result = await execute(query.location, data);
      if (result) {
        res.status(201).send({
          success: true
        });
      }
    if (!result) return res.status(404).send('The parcel with the given ID was not found.');
  });
  server.post('/api/v1/auth/signup',  async (req, res) => {
    const data = [
      req.body.firstname, req.body.lastname,
      req.body.password, req.body.username, req.body.email, req.body.usertype,
    ];
      const result = await execute(query.register, data);
        if (result.rows[0]) {
          const record = result.rows[0];
          res.status(400).send({
          success: true, user: record.id,
        });
      }
        return res.status(201).send({
         message: 'This username already exists',
        });
  });
  server.post('/api/v1/auth/login', async (req, res) => {
    const data = [
    req.body.username, req.body.password];
    const result = await execute(query.login, data);
    const output = result.rows[0];
    if (!result) {
      return res.status(404).send({ message: 'No match' });
    }
    return jwt.sign({ result }, 'secretkey', (err, token) => {
      res.json({
        token,
        User: output.username,
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

export default routes;
