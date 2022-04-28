const express = require("express");
const route= express.Router();
const Member= require("../models/memberModel");


route.get("/", async (req,res)=>{
    try {
        const Members= await Member.findAll(
            {
                attributes: {exclude: ['id']},
            }
        );
        res.send(Members);
    } catch (err) {
        res.send("something went wrong");
    } 
});

//retrieves the name of all members and their committees
// route.get("/memberForCommittee", async (req,res)=>{
//     try {
//         const member = await Member.findAll({
//             attributes: ['name', 'committeeName']
//         });
//         res.send(member);
//     } catch (err) {
//         res.send("something went wrong");
//     } 
// });

//retrieves all members of a certain committee
// route.get("/:committeeName", async (req,res)=>{
//     try {
//         const member = await Member.findAll({
//             where: {
//                 committeeName: req.params.committeeName
//             }
//         });
//         res.send(member);
//     } catch (err) {
//         res.send("something went wrong");
//     } 
// });

route.post("/",async (req,res) =>{
    try{
        const newMember = await Member.create({
            name: req.body.name,
            committeeId: req.body.committeeId,
            isGrad: req.body.isGrad,
            DateJoined: Date.now(),
        });
        res.send(newMember);
    }
    catch(err){
        res.send("something went wrong");
    }
    
});

route.patch("/:id", async (req,res)=>{
    try{
        const member = await Member.findByPk(req.params.id);
        member.name= req.body.name;
        member.committeeId= req.body.committeeId;
        member.isGrad= req.body.isGrad;
        member.DateJoined= req.body.DateJoined;
        await member.save();
        res.send(member);
    }
    catch(err){
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
        res.send("something went wrong");
    }
    
});

module.exports= route;