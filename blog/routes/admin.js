const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.get("/" , async(req, res, next)=>{
    const users = await User.find({role : "user"});
    console.log(users);
    res.render("admin-panel" , { employees : users});
})




module.exports = router;