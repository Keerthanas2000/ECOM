const Product = require('../model/product');

const getProducts = async (req, res) => {
  try {
    const { type } = req.query;

    const productDoc = await Product.findOne({ type });

    if (!productDoc) {
      return res.status(404).json({ message: "Products not found for this type" });
    }

    res.status(200).json(productDoc.list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };
