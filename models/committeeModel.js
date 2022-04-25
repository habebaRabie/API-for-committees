const {DataTypes}= require("sequelize");
const db = require("../config/db");
const Joi = require('joi');


module.exports= db.define("committees",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // validate: {
        //     is: [/^[a-zA-Z\s]*$/],
        // },
    },
    headName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // validate: {
        //     is: [/^[a-zA-Z\s]*$/],
        // },
    },
    viceName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // validate: {
        //     is: [/^[a-zA-Z\s]*$/],
        // },
    },

});