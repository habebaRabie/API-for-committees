const express = require("express");
const route= express.Router();
const Member= require("../models/memberModel");
const Committee= require("../models/committeeModel");


route.get("/", async (req,res)=>{
    try{
        const committees= await Committee.findAll();
        res.send(committees);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
});
route.post("/",async (req,res) =>{
    try{
        const newCommitee = await Committee.create({
            name: req.body.name,
            headName: req.body.headName,
            viceName: req.body.viceName,
        });
        res.send(newCommitee);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
    
});
route.put("/:id", async (req,res)=>{
    try{
        const commitee = await Committee.findByPk(req.params.id);
        commitee.name= req.body.name;
        commitee.headName= req.body.headName;
        commitee.viceName= req.body.viceName;
        await commitee.save();
        res.send(commitee);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
    
});
route.delete("/:id", async (req,res)=>{
    try{
        const commitee = await Committee.findByPk(req.params.id);
        await commitee.destroy();
        res.send(commitee);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
});

module.exports= route;