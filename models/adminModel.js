const {DataTypes}= require("sequelize");
const bcrypt = require('bcrypt');
const db = require("../config/db");

module.exports= db.define("admins",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
});
