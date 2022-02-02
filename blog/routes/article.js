const { log } = require('debug/src/node');
const express = require('express');
const router = express.Router();
const Article = require("../models/article");

router.post('/', async (req,res,next)=>{
    console.log("article-post");
    console.log(req.body);
    

    try {
        await Article.create({title: req.body.title , text : req.body.text , author: req.session.user._id})
        
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
        
    }

    res.send("ok")
})


module.exports = router;