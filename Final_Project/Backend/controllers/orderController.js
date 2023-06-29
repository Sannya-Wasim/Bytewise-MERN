const Order = require("../models/Order");

const orderController = require('express').Router();

orderController.post("/", async (req, res) => {
    try {
      const { user, items, totalPrice } = req.body;
      if (!user || !items || !totalPrice) {
        return res.json({ msg: "Missing required fields!" });
      }
      const order = new Order({
        user,
        items,
        totalPrice,
      });
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create order" });
    }
  });

  orderController.get('/orders', async(req, res)=>{
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      throw new Error
    }
  })

  module.exports = orderController;