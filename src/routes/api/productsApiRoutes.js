const express = require('express');
const router = express.Router()

const productsApiController = require('../../controller/api/productsApiController');

//Lista de productos
router.get('/', productsApiController.list);
//Detalles de productos
router.get('/:id', productsApiController.detail);
//Creacion de productos
router.post('/create', productsApiController.create);
//Actualizar/Edicion de productos
router.put('/:id', productsApiController.update);
//Eliminacion de productos
router.delete('/:id', productsApiController.delete);

module.exports = router;