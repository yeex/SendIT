import express from "express";
import parcels from "./parcels";


const router = express.Router();
router.use(parcels);

export default router;