const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users',async(req,res)=>{
    const user = new User(req.body)
    console.log(user)
    try{      
        console.log(req.body);
        await user.save()
        const token = await user.generateAuthToken()    
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/users/login',async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }
    catch(e){
        res.status(400).send()
    }
})


router.get('/users/me',auth,async(req,res)=>{
    res.send(req.user) 
    // console.log('working');
    // res.json({ message: "Welcome" });
})

module.exports = router