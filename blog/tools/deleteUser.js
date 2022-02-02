const User = require("../models/user");


const deleteUser = async (req,res) => {
    try {
        await User.findOneAndDelete({username: req.body.username}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        });
    } catch (e) {
      console.log("error - delteUser", e);
      return res.render("register", { msg: "Somthing went wrong" });
    }
  };
  
  module.exports = deleteUser;