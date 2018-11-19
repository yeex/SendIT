var express = require('express');
var app = express();
app.use(express.json());
const parcels = [
	{
		id: 1,
		userName: "moise",
		parcels: [
		  {
			parcelId: 11,
			parcelName: 'phones',
			status: 'delivered',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 13,
			parcelName: 'phones',
			status: 'cancelled',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 12,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  }
		]
	},
	{
		id: 2,
		userName: "moise",
		parcels: [
		  {
			parcelId: 21,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 25,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 26,
			parcelName: 'phones',
			status: 'cancelled',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  }
		]
	},
	{
		id: 3,
		userName: "moise",
		parcels: [
		  {
			parcelId: 31,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 33,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: 32,
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  }
		]
	}
];
app.get('/', (req, res) => {
	res.send('SendIT');
});

// Get all parcel delivery orders
app.get('/api/v1/users/parcels', (req, res) => {
	res.send(parcels);
});

// Create a parcel delivery order
app.post('/api/v1/users/parcels', (req, res) => {
	const parcel = {
		id: parcels.length + 1,
		name: req.body.name,
		parcel: [
			{
				parcelId: parcelId.length + 1,
		    parcelName: '',
		    status: '',
		    location: '',
		    destination: '',
		    weight: '',
		    price: ''
			}
		],
	};
	parcels.push(parcel);
	res.send(parcel);
});

// Fetch a specific parcel delivery order
app.get('/api/v1/users/parcels/:parcelId', (req, res) => {
	const parcel = parcels.find(c => c.parcels(c => c.parceId === parseInt(req.params.parcelId)));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	parcel.name = req.body.name;
	res.send(parcel);
});

// Fetch all parcel delivery order by a specific user
app.get('/api/v1/users/:id/parcels', (req, res) => {
const result = parcels.find(c => c.id === parseInt(req.params.id));
res.send (result);
});
// Cancel a specific parcel delivery order
app.put('/api/v1/users/parcels/:id/cancel', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	parcel.name = req.body.name;
	const index = parcels.indexOf(parcel);
	parcels.splice(index, 1);
	res.send(parcel);
});
app.listen(3000 , () => console.log('Listening on port 3000...'));