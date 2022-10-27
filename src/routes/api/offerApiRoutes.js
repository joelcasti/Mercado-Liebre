const express = require('express');
const router = express.Router()

const offerApiController = require('../../controller/api/offerApiController');

//Lista de productos
router.get('/', offerApiController.list);

module.exports = router;