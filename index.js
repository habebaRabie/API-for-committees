const express = require ("express");
const app = express();
const db= require("./config/db");

app.use(express.json())

db.authenticate().then(()=>{
    db.sync({force: true});
    console.log("connect");
});

const Committee = require("./modules/committeeModule");
const Member = require("./modules/memberModule");


Committee.hasMany(Member);
Member.belongsTo(Committee);

app.use("/member",require("./routes/memberRoutes"));
app.use("/committee",require("./routes/committeeRoutes"));
app.listen(5000,()=>{
    console.log("Running");
});
