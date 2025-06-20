const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

// GET /api/products
router.get('/products', (req, res) => {
  const search = req.query.search?.toLowerCase();
  const category = req.query.category?.toLowerCase();

  let filtered = products;

  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search)
    );
  }

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category);
  }

  res.json(filtered);
});

// GET /api/brands
router.get('/brands', (req, res) => {
  const brands = [...new Set(products.map(p => p.brand))];
  res.json(brands);
});

// GET /api/categories
router.get('/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

module.exports = router;
