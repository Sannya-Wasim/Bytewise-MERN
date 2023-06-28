const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const authController = require('./controllers/authController')
const productController = require('./controllers/productController')

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Connection successful, you can perform further operations here
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    // Connection failed, handle the error
    console.error("MongoDB connection error:", error);
  });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authController)
app.use('/api', productController)

app.listen(process.env.PORT, () =>
  console.log(`Server has started successfully...`)
);
