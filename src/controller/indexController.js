const db = require('../database/models');

const indexController = {
    home: (req, res) => {
        db.Product.findAll({
            include: [{association: "offer"}]
        })
        .then(allProducts => {
            res.render('home', {allProducts});
        })
    }
}

module.exports = indexController;