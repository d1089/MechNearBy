const express = require('express');
const router = express.Router();
const {
  getShop,
  getShops,
  createShop,
  deleteShop,
  updateShop,
} = require('../controllers/shops');

router.route('/').get(getShops).post(createShop);

router.route('/:id').get(getShop).put(updateShop).delete(deleteShop);

module.exports = router;
