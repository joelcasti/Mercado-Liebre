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
        tableName: 'category',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        Category.hasMany(models.Product,
            {
                as: 'products',
                foreignKey: 'offer_id'
            }
        );
    }

    return Category;
};