import express from "express";
import { Product } from "../models/poductModel.js";

const router = express.Router();

// create a new product
router.post("/", async (request, response) => {
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
    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({
      message: error.message,
    });
  }
});

// get all product
router.get("/", async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

// get a single product (detail)
router.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;

      const product = await Product.findById(id);

      return response.status(200).json({ data: product });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: error.message,
        });
    }
});

// delete a product
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result  = await Product.findByIdAndDelete(id);

    if (!product) {
      return response.status(404).send({
        message: "Product not found",
      });
    }

    return response.status(200).send({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({
      message: error.message,
    });
  }
});


export default router;
