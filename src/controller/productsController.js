const db = require('../database/models');
const Op = db.Sequelize.Op

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
    },
    search: (req, res) => {
        let productFinded = req.query.search;
        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${productFinded}%`
                }
            }, include: [{association: "offer"}]
        })
        .then(results => {
            res.render('results', {results, productFinded})
        })
    }
}

module.exports = productsController;