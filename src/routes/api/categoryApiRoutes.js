const express = require('express');
const router = express.Router()

const categoryApiController = require('../../controller/api/categoryApiController');

//Lista de productos
router.get('/', categoryApiController.list);

module.exports = router;