
//const express = require('express');

const mongoose = require('mongoose');

//const app = express();

mongoose.connect('mongodb+srv://sahilhsgupta7:IjFRKDdTIsP4Bb1t@cluster0.lqdd7xj.mongodb.net/u_table');


const User = mongoose.model('Users',{username : String, email : String, password: String});

const u1 = new User({
	username: "sdadas",
	email: "em@13W@gmail.com",
	password: "121asxsa"
});

u1.save().then(() => {console.log("Saved")});

