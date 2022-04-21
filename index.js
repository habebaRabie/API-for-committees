const express = require ("express");
const app = express();
const db= require("./config/db");

app.use(express.json())

db.authenticate().then(()=>{
    db.sync({force: true});
    console.log("connect");
});

const Committee = require("./models/committeeModel");
const Member = require("./models/memberModel");

Committee.hasMany(Member, {foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Member.belongsTo(Committee, {foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

app.use("/member",require("./routes/memberRoutes"));
app.use("/committee",require("./routes/committeeRoutes"));
app.listen(5000,()=>{
    console.log("Running");
});
