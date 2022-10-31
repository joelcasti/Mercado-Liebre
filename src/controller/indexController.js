const db = require('../database/models');

const indexController = {
    home: (req, res) => {
        db.Product.findAll()
        .then(allProducts => {
            res.render('home', {allProducts});
        })
    }
}

module.exports = indexController;