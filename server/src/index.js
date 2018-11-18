import express from 'express';
import parcelsRouter from './routes/parcels';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/v1/parcels', parcelsRouter);

server.get('/api/v1/users/', (req, res) => {
    res.status(200).send(
        'Our users are fine'
        );
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log('API server started on ${PORT}');
})