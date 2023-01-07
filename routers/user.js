const express = require('express')
const User = require('../models/users')
const router = new express.Router()

router.get('/',async(req,res)=>{
    // res.send(req.user)
    console.log('working');
    res.json({ message: "Welcome to application." });
})

module.exports = router