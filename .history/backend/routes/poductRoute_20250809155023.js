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
    return res.status(201).send({
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: error.message,
    });
  }
});

// get all products
router.get("/", async (req, res) => { 
    try {
        
    }
});

export default router;
