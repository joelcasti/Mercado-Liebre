const db = require('../../database/models');

const categoryApiController = {
    list: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            return res.status(200).json({
                total: categories.length,
                data: categories,
                status: 200
            })
        })
    }
};

module.exports = categoryApiController;