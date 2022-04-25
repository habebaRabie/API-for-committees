const express = require("express");
const route= express.Router();
const Member= require("../models/memberModel");
const Committee= require("../models/committeeModel");
const Joi= require("joi");


route.get("/", async (req,res)=>{
    try{
        const committees= await Committee.findAll(
            {
                attributes: {exclude: ['id']},
            }
        );
        res.send(committees);
    }
    catch(err){
        res.send("something went wrong");
    }
});
route.post("/",async (req,res) =>{
    try{
        const data = req.body;
        const schema = Joi.object().keys({
            name: Joi.string().alphanum().required(),
            headName: Joi.string().required(),
            viceName: Joi.string().required(),
        });
        const newCommitee= await Committee.create(data);
        res.send(newCommitee);
        // console.log(newCommitee);

        // const newCommitee = await Committee.create({
        //     name: req.body.name,
        //     headName: req.body.headName,
        //     viceName: req.body.viceName,
        // });
        // res.send(newCommitee);
        // console.log(res.statusCode)
    }
    catch(err){
        console.log(err);
        res.send("something went wrong");
    }
    
});
route.patch("/:id", async (req,res)=>{
    try{
        const commitee = await Committee.findByPk(req.params.id);
        commitee.name= req.body.name;
        commitee.headName= req.body.headName;
        commitee.viceName= req.body.viceName;
        await commitee.save();
        res.send(commitee);
    }
    catch(err){
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
        res.send("something went wrong");
    }
});

module.exports= route;