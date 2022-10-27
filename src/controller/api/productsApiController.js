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
    search: (req, res) => {
        // let palabra = req.query.keyword;

        // db.Product.findAll({
        //     where: {
        //         name: {
        //             [Op.like]: '%' + palabra + '%'
        //         }
        //     }
        // })
        // .then(products => {
        //     if(products.length > 0) {
        //         return res.status(200).json(products)
        //     }
        //     return res.status(200).json("No se ha encontrado el producto")
        // })
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
        let id = req.params.id;

        db.Product.update(req.body, {
            where: {
                id: id
            }
        })
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
                update: 'OK'
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