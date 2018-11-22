import express from 'express';
import parcels from '../controllers/parcels';

const parcelsRouter = express.Router();

parcelsRouter.get('/parcels', parcels);
parcelsRouter.get('/parcels/:id', parcels);
parcelsRouter.get('/users/:id/parcels', parcels);
parcelsRouter.put('/parcels/:id/cancel', parcels);
parcelsRouter.post('/parcels', parcels);

export default parcelsRouter;
