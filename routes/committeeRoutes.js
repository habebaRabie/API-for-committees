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
        name: Joi.string().required().regex(/^[a-zA-Z\s]*$/),
        headName: Joi.string().required().regex(/^[a-zA-Z\s]*$/),
        viceName: Joi.string().required().regex(/^[a-zA-Z\s]*$/),
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
      const data = req.body;

      const schema = Joi.object().keys({
        name: Joi.string().regex(/^[a-zA-Z\s]*$/),
        headName: Joi.string().regex(/^[a-zA-Z\s]*$/),
        viceName: Joi.string().regex(/^[a-zA-Z\s]*$/),
      });
      const result = schema.validate(data);

      if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
      }
      
      const updatedCommitee = await commitee.update(result.value);
      res.send(updatedCommitee);
      
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
