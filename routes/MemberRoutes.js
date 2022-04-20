const express = require("express");
const route= express.Router();
const Member= require("../modules/memberModule");


route.get("/", async (req,res)=>{
    const Members= await Member.findAll();
    res.send(Members);
});

route.post("/",async (req,res) =>{
    const newMember = await Member.create({
        name: req.body.name,
        committeeName: req.body.committeeName,
        graduate: req.body.graduate,
        commiteeId: req.body.commiteeId,
    });
    res.send(newMember);
});

route.put("/:id", async (req,res)=>{
    const member = await Member.findByPk(req.params.id);
    member.name= req.body.name;
    member.committeeName= req.body.committeeName;
    member.graduate= req.body.graduate;
    await member.save();
    res.send(member);
});

route.delete("/:id", async (req,res)=>{
    const member = await Member.findByPk(req.params.id);
    await member.destroy();
    res.send(member);
});

module.exports= route;