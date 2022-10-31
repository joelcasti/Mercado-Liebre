const db = require('../database/models');

const productsController = {
    list: (req, res) => {
        db.Product.findAll({
            include: [{association: "offer"}]
        })
        .then(allProducts => {
            res.render('products', {allProducts});
        })
    },
    detail: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [{association: "offer"}, {association: "category"}]
        })
        .then(product => {
            res.render('detail', {product})
        })
    }
}

module.exports = productsController;