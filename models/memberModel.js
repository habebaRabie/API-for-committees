const {DataTypes}= require("sequelize");
const db = require("../config/db");

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
            isAlpha: true,
            min: 'A',
            max: 'z',
        },
    },
    // committeeId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    isGrad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    DateJoined: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
});
