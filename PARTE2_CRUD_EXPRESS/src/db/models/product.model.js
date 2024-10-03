const {Model ,DataTypes} = require('sequelize');


const PRODUCT_TABLE = 'products';

class Product extends Model {
    static config(sequelize){
       return {
        sequelize,
        tableName: PRODUCT_TABLE,
        modelName: 'Product',
        timestamps: true
       }
    }
}

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notEmpty: true, 
            len: [1, 50] 
        },
        field:'name'
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notEmpty: true, 
            len: [1, 255] 
        },
        field:'description'
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(9, 2), 
        validate: {
            isDecimal: true, 
            min: 0          
        },
        field: 'price'
    },
    stock:{
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            isInt: true, 
            min: 0      
        },
        field:'stock'
    }
}
module.exports = { Product, ProductSchema };
