const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: Number,
    count: Number,
  },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
