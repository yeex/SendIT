var express = require('express');
var app = express();
app.use(express.json());
const parcels = [
	{
		id: "1",
		userName: "moise",
		parcels: [
		  {
			parcelId: '11',
			parcelName: 'phones',
			status: 'delivered',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '13',
			parcelName: 'phones',
			status: 'cancelled',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '12',
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
		id: "2",
		userName: "moise",
		parcels: [
		  {
			parcelId: '21',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '25',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '26',
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
		id: "3",
		userName: "moise",
		parcels: [
		  {
			parcelId: '31',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '33',
			parcelName: 'phones',
			status: 'in transit',
			location: 'rwanda',
			destination: 'kenya',
			weight: 10,
			price: 200
		  },
		  {
			parcelId: '32',
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
		parcel: [
			{
				parcelId: '',
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
app.put('/api/v1/users/parcels/:id', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	const { error }= validateParcel(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	parcel.name = req.body.name;
	res.send(parcel);
});
app.get('/api/v1/users/:id/parcels', (req, res) => {
const result = parcels.find(c => c.id === parseInt(req.params.id));
res.send (result);
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
app.get('/api/v1/users/parcels/:id', (req, res) => {
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The parcel with the given ID was not found.');
	res.send(parcel);
});
app.listen(3000 , () => console.log('Listening on port 3000...'));