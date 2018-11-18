import express from 'express';

const parcelsRouter = express.Router();

parcelsRouter.get('/', () => {

    // parcels.filter();   give an array
    // parcels.find();    five an object
});

export default parcelsRouter;


        // Security 
        // jsonwebtoken