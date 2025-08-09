import express from 'express';
import { Product } from '../models/poductModel.js';

const router = express.Router();    

// create a new product
router.post('/', async (req, res) => {
 if (
   !request.body.name ||
   !request.body.priceInCents ||
   !request.body.image ||
   !request.body.category
 ) {
   return response.status(400).send({
     message: "Required fields are missing",
   });
 }


});

export default router;