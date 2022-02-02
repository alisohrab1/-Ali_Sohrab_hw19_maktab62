const User = require("../models/user");

const addUser = async (req,res) => {
  try {
    console.log("hello from addUser");

    const NEW_USER = new User({
      username: req.body.username,
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      password: req.body.password,
      gender: req.body.gender,
      phone : req.body.phone
    });

    NEW_USER.save((err, user) => {
      if (err) {
        // return res.status(500).json({msg: "Somthing went wrong"})
        return res.render("register", { msg: "Somthing went wrong" });
      } else {
        return res.render("login");
      }
    });
  } catch (e) {
    console.log("error - addUser", e);
    return res.render("register", { msg: "Somthing went wrong" });
  }
};

module.exports = addUser;