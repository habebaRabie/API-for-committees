const {DataTypes}= require("sequelize");
const db = require("../config/db");


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
        validate: {
            isAlpha: true,
            min: 'A',
            max: 'z',
        },
    },
    headName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: true,
            min: 'A',
            max: 'z',
        },
    },
    viceName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isAlpha: true,
            min: 'A',
            max: 'z',
        },
    },

});