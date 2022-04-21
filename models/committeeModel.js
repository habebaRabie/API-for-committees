const {DataTypes}= require("sequelize");
const db = require("../config/db");


module.exports= db.define("commitee",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    headName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    viceName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});