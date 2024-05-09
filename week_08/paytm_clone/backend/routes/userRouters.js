
const express = require('express');
const {signUpValidation,signInValidation, updateUserValidation} = require('../middlewares/inputBodyVaildation');
const {User, Bank} = require('../db/userDB');
const user = express.Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { authRequest } = require('../middlewares/authRequest');

user.post('/signUp',signUpValidation,async (req,res) => {
    
    const body = req.body;

    // const existingUser = await User.findOne({"name.firstName" : body.name.firstName,"name.lastName" : body.name.lastName});
    const existingUser = await User.findOne({"username" : body.username});

    console.log(existingUser);
    if(existingUser) {
        res.json({
            "msg": "User already exists."
        })
        return;
    }

    const newUser = new User({
        username:body.username,
        name:{
            firstName : body.name.firstName,
            lastName : body.name.lastName
        },
        password : body.password
    });


    try {
        
        const newUserSaved = await newUser.save();
        await new Bank({
            userId : newUserSaved._id,
            balance : 100000
        }).save();

        res.json({
            "msg": "Welcome to the application."
        })
    }catch(err) {
        console.log(err);
        res.json({
            "msg" : "Unable to sign up pls try again later"
        });
    }
})

user.post('/signIn',signInValidation,async (req,res) => {
    
    const existingUser = await User.findOne({"username" : req.body.username});

    if(existingUser) {
        if(existingUser.password == req.body.password) {
            const token = jwt.sign(req.body.username,JWT_SECRET);
        
            res.json({
                'token' : token
            })
        } else {
            res.json({
                'msg' : 'Wrong password.'
            })
        }
        return;
        
    }

    res.json({
        'msg' : 'User does not exists.'
    })
    
})

user.use(updateUserValidation);
user.use(authRequest);

user.put('/updateUserInfo',async (req,res) => {
    
    let updateUser = {}
    if(req.body.firstName) updateUser['name.firstName'] = req.body.firstName;
    if(req.body.lastName) updateUser['name.lastName'] = req.body.lastName;
    if(req.body.password) updateUser['password'] = req.body.password;

    console.log(updateUser);    

    const updatedUser = await User.findOneAndUpdate({'username' : req.body.username},{
        $set : updateUser
    },{new : true})

    console.log(updatedUser);    
    res.json({
        'msg' : req.body.username
    })
})

module.exports = {
    user
}