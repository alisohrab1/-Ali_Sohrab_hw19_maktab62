const express = require("express");
const router = express.Router();
const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const Article = require("../models/article");

router.get("/", async (req, res, next) => {
    if (!req.session.user || !req.cookies.user_sid) {
        // return res.status(406).json({msg: 'Not Acceptable'});
        return res.redirect('login')
    };

  const articles = await Article.find({author : req.session.user._id})
  console.log(articles);
  res.render("profile", { user: req.session.user , articles : articles });
});

router.delete("/" , async(req,res,next)=>{


  try {

    await User.findOneAndRemove({username : req.session.user.username});
    await Article.deleteMany({author : req.session.user._id});
    res.clearCookie("user_sid");
    res.send("ok")
    
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong")
  }


})

module.exports = router;
