const {DataTypes}= require("sequelize");
const db = require("../config/db");

module.exports= db.define("member",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: false,
    },
    committeeName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    graduate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});
