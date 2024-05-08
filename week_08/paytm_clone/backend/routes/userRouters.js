
const express = require('express');
const {signUpValidation} = require('../middlewares/inputBodyVaildation');
const {User} = require('../db/userDB');
const user = express.Router();


user.post('/signUp',signUpValidation,async (req,res) => {
    console.log(req.body);
    const newUser = new User({
        name:{
            firstName : req.body.name.firstName,
            lastName : req.body.name.lastName
        },
        password : req.body.password
    });

    try {
        await newUser.save()
        res.json({
            "msg" : "Sucessfully signup"
        })
    }catch(err) {
        console.log(err);
        res.json({
            "msg" : "Unable to sign up pls try again later"
        });
    }
})

module.exports = {
    user
}