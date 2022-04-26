const express = require("express");
const route = express.Router();
const Member = require("../models/memberModel");
const Committee = require("../models/committeeModel");
const Joi = require("joi");

route.get("/", async (req, res) => {
  try {
    const committees = await Committee.findAll({
      attributes: { exclude: ["id"] },
    });
    res.send(committees);
  } catch (err) {
    res.send("something went wrong");
  }
});

route.post("/", async (req, res) => {
  try {
    const data = req.body;
    const schema = Joi.object().keys({
        name: Joi.string().alphanum().required(),
        // name: Joi.alternatives().try(not(Joi.number()), Joi.string()).required(),
        headName: Joi.string().required(),
        viceName: Joi.string().required(),
    });
    const result = schema.validate(data);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
      return;
    }

    const newCommitee = await Committee.create(result.value);
    res.send(newCommitee);

  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

route.patch("/:id", async (req, res) => {
  try {
    const commitee = await Committee.findByPk(req.params.id);
    commitee.name = req.body.name;
    commitee.headName = req.body.headName;
    commitee.viceName = req.body.viceName;
    await commitee.save();
    res.send(commitee);
  } catch (err) {
    res.send("something went wrong");
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const commitee = await Committee.findByPk(req.params.id);
    await commitee.destroy();
    res.send(commitee);
  } catch (err) {
    res.send("something went wrong");
  }
});

module.exports = route;
