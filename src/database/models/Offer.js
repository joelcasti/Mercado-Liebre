module.exports = (sequelize, dataTypes) => {
    let alias = 'Offer';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        offer: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'offers',
        timestamps: false
    };

    const Offer = sequelize.define(alias, cols, config);

    Offer.associate = models => {
        Offer.hasMany(models.Product,
            {
                as: 'products',
                foreignKey: 'offer_id'
            }
        );
    }

    return Offer;
};