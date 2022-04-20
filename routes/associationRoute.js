const express = require("express");
const route= express.Router();
const Committee= require("../modules/committeeModule");
const Member= require("../modules/memberModule");


route.get("/memberForCommittee", async (req,res)=>{
    try {
        
        const member = await Member.findAll();
        const committee = await Committee.findAll();
        const membersInCommittee = member.map(async (member)=>{
            committee.map(async (committee)=>{
                if(member.commiteeId === committee.id){
                    //await committee.add(member.name, committee.name);
                }
            });
        });
        res.send(membersInCommittee);
    } catch (err) {
        console.log("something went wrong");
        res.send("something went wrong");
    } 
});