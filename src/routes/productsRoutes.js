const express = require('express');
const router = express.Router()

const productsController = require('../controller/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/search', productsController.search);

// router.get('/create-products', productsController, create);
// router.post('/create-products', productsController, store);

// router.get('/edit-products/:id', productsController, edit);
// router.put('/edit-products/:id', productsController, update);

module.exports = router;