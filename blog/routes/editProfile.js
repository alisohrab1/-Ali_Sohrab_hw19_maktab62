const express = require("express");
const router = express.Router();
const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const addUser = require("../tools/addUser");
const sessionChecker = require("../tools/sessionchecher");

router.put("/", async (req, res, next) => {
  console.log("hello from post");

  // if (!validate.validateRegister(JSON.parse(JSON.stringify(req.body)))) {
  //   return res.render("register", { msg: "Not Acceptable" });
  // }

  try {
    // const filter = { username: req.session.user.username };
    const update = {
      username: req.body.username,
      lastName: req.body.lastname,
      firstName: req.body.firstname,
      password: req.body.password,
      gender: req.body.gender,
      phone: req.body.phone,
    };

    const dup = await User.findOne({ username: update.username });

    // console.log("duplicate" , dup);

    if (dup && dup.username !== req.session.user.username) {
      res.status(400).send("dupplicate username");
    }

    const found = await User.findOne({
      username: req.session.user.username,
    });

    found.username = update.username;
    found.lastName = update.lastName;
    found.firstName = update.firstName;
    found.password = update.password;
    found.gender = update.gender;
    found.phone = update.phone;

    await found.save();

    req.session.user = await User.findOne({ username: update.username });
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).json("something went wrong");
  }
});

module.exports = router;
