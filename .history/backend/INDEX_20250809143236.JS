import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
const app = express();

config();

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);

mongoose
