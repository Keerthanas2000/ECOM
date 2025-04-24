const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: { type: String, required: true },
  list: [{ 
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  }]
});

const Product = mongoose.model('Product', productSchema, 'Products');  

module.exports = Product;
