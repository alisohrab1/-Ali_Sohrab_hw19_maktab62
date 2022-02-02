const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.clearCookie("user_sid");
  res.send("success");
});

module.exports = router;
