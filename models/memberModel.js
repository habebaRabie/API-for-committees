const {DataTypes}= require("sequelize");
const db = require("../config/db");
const Joi = require('joi');

module.exports= db.define("members",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            is: [/^[a-zA-Z\s]*$/],
        },
    },
    isGrad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    DateJoined: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
});
