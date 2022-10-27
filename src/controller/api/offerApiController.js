const db = require('../../database/models');

const offerApiController = {
    list: (req, res) => {
        db.Offer.findAll()
        .then(offers => {
            return res.status(200).json({
                total: offers.length,
                data: offers,
                status: 200
            })
        })
    }
};

module.exports = offerApiController;