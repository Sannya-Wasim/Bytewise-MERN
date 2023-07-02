const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const reportController = require('./controllers/reportController');

const customCron = require("./cron/cron");
const { sendCustomMail } = require("./cron/cron");

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

app.use("/auth", authController);
app.use("/api/products", productController);
app.use("/api/order", orderController);
app.use("/api/report", reportController)

// Cron job
customCron.sendCustomMail();

app.listen(process.env.PORT, () =>
  console.log(`Server has started successfully...`)
);
