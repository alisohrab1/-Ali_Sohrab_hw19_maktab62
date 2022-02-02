const express = require("express");
const router = express.Router();
const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const addUser = require("../tools/addUser");
const sessionChecker = require("../tools/sessionchecher");
const bcrypt = require("bcrypt");

router.get("/", sessionChecker, (req, res, next) => {
  res.render("../views/register");
});

router.post("/", async (req, res, next) => {
  console.log("hello from post");

  // if (!validate.validateRegister(JSON.parse(JSON.stringify(req.body)))) {
  //   return res.render("register", { msg: "Not Acceptable" });
  // }

  try {
    const user = await User.findOne({ username: req.body.username.trim() });
    if (user) res.status(400).json("duplicate user");

    const NEW_USER = new User({
      username: req.body.username,
      lastName: req.body.lastname,
      firstName: req.body.firstname,
      password: req.body.password,
      gender: req.body.gender,
      phone: req.body.phone,
    });
    await NEW_USER.save();
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).json("something went wrong");
  }
});

module.exports = router;
