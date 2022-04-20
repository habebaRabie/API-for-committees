const express = require("express");
const route= express.Router();
const Member= require("../modules/memberModule");


route.get("/", async (req,res)=>{
    try {
        const Members= await Member.findAll();
        res.send(Members);
    } catch (err) {
        console.log("something went wrong");
        res.send("something went wrong");
    } 
});

route.post("/",async (req,res) =>{
    try{
        const newMember = await Member.create({
            name: req.body.name,
            committeeName: req.body.committeeName,
            graduate: req.body.graduate,
            commiteeId: req.body.commiteeId,
        });
        res.send(newMember);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
    
});

route.put("/:id", async (req,res)=>{
    try{
        const member = await Member.findByPk(req.params.id);
        member.name= req.body.name;
        member.committeeName= req.body.committeeName;
        member.graduate= req.body.graduate;
        await member.save();
        res.send(member);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
    
});

route.delete("/:id", async (req,res)=>{
    try{
        const member = await Member.findByPk(req.params.id);
        await member.destroy();
        res.send(member);
    }
    catch(err){
        console.log("something went wrong");
        res.send("something went wrong");
    }
    
});

module.exports= route;