import express from 'express';
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
  server.get('/api/v1/parcels', (req, res) => {
	  	res.status(200).send(parcels);
  });
};

export default routes;
