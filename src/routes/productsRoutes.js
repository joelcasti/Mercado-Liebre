const express = require('express');
const router = express.Router()

const productsController = require('../controller/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);

module.exports = router;