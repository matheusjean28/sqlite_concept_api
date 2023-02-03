const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class pay extends Model{}

pay.init({
    ID: {
        type: DataTypes.NUMBER,
        autoIncrement:true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }, 
    price: {
        type: DataTypes.NUMBER
    },
    duedate: {
        type: DataTypes.DATE
    },
    created_at: {
        type: DataTypes,
        allowNull:false,
    }}, 
    {
        sequelize, 
        modelName: 'payment',
        timestamps: false,
    }
);