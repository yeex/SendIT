import express from 'express';
import parcels from './../controllers/parcels';

const parcelsRouter = express.Router();

parcelsRouter.get('/parcels', parcels);
parcelsRouter.get('/parcels/:id', );
parcelsRouter.get('/users/:id/parcels', );
parcelsRouter.put('/parcels/:id/cancel', );
parcelsRouter.post('/parcels', );

export default parcelsRouter;


        // Security 
        // jsonwebtoken