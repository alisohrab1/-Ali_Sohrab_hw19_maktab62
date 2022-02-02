const express = require("express");
const router = express.Router();
const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const addUser = require("../tools/addUser");
const sessionChecker = require("../tools/sessionchecher");
const bcrypt = require("bcrypt");

router.get("/", sessionChecker, (req, res, next) => {
  res.render("../views/login");
});

router.post("/", (req, res, next) => {
  findUser(req.body.username)
    .then((data) => {
      if (data === null)
        return res.status(400).send("invalid username or password");
      // if (data.password !== req.body.password) return res.status(400).send("invalid username or password");
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        if (err) {
          return res.status(500).send("something went wrong");
        }

        if (!result) {
          return res.status(400).send("invalid username or password");
        }
        console.log("login successful");

        req.session.user = data;

        console.log(req.session.user.role);


        if(req.session.user.role === "admin"){
          console.log("works");
          return res.send("admin");
        } 
        console.log("should not log this");
        res.send("user")

        
      });
    })
    .catch((err) => {
      console.log(err);
      return res.render("register", { msg: "something went wrong" });
    });
});

module.exports = router;
