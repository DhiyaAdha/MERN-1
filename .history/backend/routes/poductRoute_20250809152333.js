import express from "express";
import { Product } from "../models/poductModel.js";

const router = express.Router();

// create a new product
router.post("/", async (req, res) => {
  try {
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

    const newProduct = {
      name: request.body.name,
      priceInCents: request.body.priceInCents,
      image: request.body.image,
      category: request.body.category,
    };

    const product = await Product.create(newProduct);
    

  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: error.message,
    });
  }
});

export default router;
