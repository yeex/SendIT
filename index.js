var express = require('express');
var app = express();
app.use(express.json());
const parcels = [
	{
		userId: "1",
		userName: "moise",
		parcels: [
		  {
			parcelId: '1',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '3',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '2',
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
		userId: "2",
		userName: "moise",
		parcels: [
		  {
			parcelId: '1',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '5',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '6',
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
		userId: "1",
		userName: "moise",
		parcels: [
		  {
			parcelId: '1',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '3',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '2',
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
app.get('/api/v1/users/parcels', (req, res) => {
	res.send(parcels);
});
app.post('/api/v1/users/parcels', (req, res) => {
	const { error }= validateParcel(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const parcel = {
		id: parcels.length + 1,
		name: req.body.name,
		parcel: [],
	};
	parcels.push(parcel);
	res.send(parcel);
});
app.put('/api/v1/users/parcels/:id', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	const { error }= validateParcel(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	parcel.name = req.body.name;
	res.send(parcel);
});
app.put('/api/v1/users/parcels/:id/cancel', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	const { error }= validateParcel(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	parcel.name = req.body.name;
	const index = parcels.indexOf(parcel);
	parcels.splice(index, 1);
	res.send(parcel);
});
function validateParcel(parcel) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(parcel, schema);
}
app.get('/api/v1/users/parcels/:id', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	res.send(parcel);
});
const port = process.env.PORT || 3000;
app.listen(port , () => console.log('Listening on port ${PORT}...'));