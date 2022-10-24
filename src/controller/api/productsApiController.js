const db = require('../../database/models');
const Op = db.Sequelize.Op;

const productsApiController = {
    list: (req, res) => {
        db.Product.findAll()
        .then(products => {
            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })
        })
    },
    detail: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            })
        })
    },
    create: (req, res) => {
        db.Product.create(req.body)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
                created: 'OK'
            })
        })
    },
    update: (req, res) => {
        db.Product.update(req.body)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
                created: 'OK'
            })
        })
    },
    delete: (req, res) => {
        let id = req.params.id;

        db.Product.destroy({
            where: {
                id: id
            }
        })
        .then(response => {
            return res.json(`Se elimino correctamente ${response} pelicula`);
        })
    }
}

module.exports = productsApiController;