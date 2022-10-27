module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        img: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {
                as: 'category',
                foreignKey: 'category_id'
            }
        );
    }

    Product.associate = models => {
        Product.belongsTo(models.Offer,
            {
                as: 'offer',
                foreignKey: 'offer_id'
            }
        );
    }
    
    return Product;
}