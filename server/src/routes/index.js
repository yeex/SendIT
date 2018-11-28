import express from 'express';
import jwt from 'jsonwebtoken';
import users from '../models/user';
import parcels from '../models/parcels';

const routes = (server) => {
  server.get('/api/v1/users', (req, res) => {
  		res.status(200).send(users);
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
  server.post('/api/v1/parcels', (req, res) => {
  		const parcel = {
	    	parcelId: 76,
	    	user: {
	      		id: 7,
	    	},
	    	parcelName: 'Iphone XR',
	    	status: 'in transit',
	    	location: 'Uganda',
	    	destination: 'Kenya',
	    	weight: 10,
	    	price: 200,
  		};
  		parcels.push(parcel);
	  	res.send(parcel);
  });
  server.post('/api/v1/parcels/:parcelId/destination', (req, res) => {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.destination = req.body.destination;
    return res.send(parcel);
  });
  server.put('/api/v1/parcels/:parcelId/status', (req, res) => {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.status = req.body.status;
    return res.send(parcel);
  });
  server.put('/api/v1/parcels/:parcelId/location', (req, res) => {
    const parcel = parcels.find(c => c.parcelId === parseInt(req.params.parcelId));
    if (!parcel) return res.status(404).send('The parcel with the given ID was not found.');
    parcel.location = req.body.location;
    return res.send(parcel);
  });
  server.post('/api/v1/auth/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post created.',
          authData,
        });
      }
    });
  });
  server.post('/api/v1/auth/login', (req, res) => {
    const legitUser = users.find(c => c.userName === req.body.userName && c.password === req.body.password);
    if (!legitUser) {
      return res.status(404).send({ message: 'No match' });
    }
    return jwt.sign({ legitUser }, 'secretkey', (err, token) => {
      res.json({
        token,
        User: legitUser,
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

export default routes;
