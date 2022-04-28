const express = require("express");
const route= express.Router();
const bcrypt = require('bcrypt');
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();


route.get("/", async (req,res)=>{
    try{
        const admins= await Admin.findAll(
            {
                attributes: { exclude: ["password"] },
            }
        );
        res.send(admins);
    }
    catch(err){
        res.send("something went wrong");
    }
});
route.post("/",async (req,res) =>{
    try{
        const salt = await bcrypt.genSaltSync()
        const newAdmin = await Admin.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
        });
        res.send(newAdmin);
    }
    catch(err){
        res.send("something went wrong");
    }
    
});

route.post("/login",async (req,res) =>{
    try{
        const admin = await Admin.findOne({
            where: {
                email: req.body.email
            } 
        });
        if(admin){
            const isValid = await bcrypt.compare(req.body.password, admin.password);
            if(isValid){
                const token = jwt.sign({id: admin.id, email: admin.email}, process.env.SECRET_KEY);
                res.send(token);
            }else{
                res.send("invalid password");
            }
        }else{
            res.send("invalid email");
        }
    }
    catch(err){
        res.send("something went wrong");
    }
    
});

module.exports= route;