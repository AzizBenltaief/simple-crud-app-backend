const express = require('express');
const Product = require('../Models/product.model.js');
const router = express.Router();

//get all products
router.get('/api/products', async (req, res) => {
try {
  const products = await Product.find({});
  res.status(200).json(products);
} catch (error) {
  res.status(500).json({ message: error.message })
}
});


//get product by id
router.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//create a product
router.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//update a product by id
router.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await (Product.findById(id));
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//delete a product
router.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' })
    }

    res.status(200).json({ message: 'Producted deleted successfully!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


module.exports = router;
