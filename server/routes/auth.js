const express = require('express');
const User = require('../models/user');
//const bcryptjs = require("bcryptjs");
const authRouter = express.Router();

authRouter.post('/api/signup', async  (req, res) => {
  //get data from client
   
    try {
        const {name,email,password} = req.body;
        const existingUser = User.findOne({email});
        if (existingUser) {
         return res.status(400).json({msg:"User with the same email already exists"});
         
        }
       // const hashedPassword = await bcryptjs.hash(password, 8);
        
        let user = new User({
         email,
         password,//:hashedPassword,
         name,
     
        });
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({Error:e.message});
    }
    
  
    //post the data to db

    //return the data to the user

});

module.exports = authRouter;