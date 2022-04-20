const express = require("express");
const route= express.Router();
const Committee= require("../modules/committeeModule");


route.get("/", async (req,res)=>{
    const committees= await Committee.findAll();
    res.send(committees);

});
route.post("/",async (req,res) =>{
    const newCommitee = await Committee.create({
        name: req.body.name,
        headName: req.body.headName,
        viceName: req.body.viceName,
    });
    res.send(newCommitee);
});
route.put("/:id", async (req,res)=>{
    const commitee = await Committee.findByPk(req.params.id);
    commitee.name= req.body.name;
    commitee.headName= req.body.headName;
    commitee.viceName= req.body.viceName;
    await commitee.save();
    res.send(commitee);
});
route.delete("/:id", async (req,res)=>{
    const commitee = await Committee.findByPk(req.params.id);
    await commitee.destroy();
    res.send(commitee);
});

module.exports= route;