const express = require('express');
const router = express.Router();

const registerRouter = require('./register');
const loginRouter = require('./login');
const profileRouter = require('./profile');
const logoutRouter = require('./logout');
const articleRouter = require("./article");
const editProfileRouter = require("./editProfile");
const adminRouter = require('./admin');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.json(true)
});

router.use("/register" , registerRouter);

router.use("/login" , loginRouter );

router.use("/profile" , profileRouter);

router.use("/logout" , logoutRouter)

router.use("/article",articleRouter);

router.use("/editProfile" , editProfileRouter);

router.use("/adminPanel" , adminRouter);




module.exports = router;
