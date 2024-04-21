
const express = require('express');
const z = require('zod');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahilhsgupta7:IjFRKDdTIsP4Bb1t@cluster0.lqdd7xj.mongodb.net/u_table');

const schema = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string().min(8)
});

const validateInput = (req,res,next) => {
	try{
		const s = schema.parse(req.body);
		console.log(s);
		next();
	} catch(err) {
		console.log(err);
		res.status(400).json({
			"msg" : "invalid body format"
		});
	}
};

const app = express();

app.use(express.json());


const UserModel = mongoose.model('Users',{
	username:String,
	email: String,
	password: String
});


app.post('/signUp',validateInput,async (req,res) => {
	
	let u = await UserModel.findOne({'email':req.body['email']});
		
	console.log(u);
	if(u) {
		res.json({
			"msg" : `user already exists with email ${req.body['email']}`
		});
	} else {
		u = new UserModel({
			username : req.body['username'],
			email: req.body['email'],
			password: req.body['password']
		});
		u.save().then(() => {console.log('Saved')});
		res.send('User saved');
	}
	
});

app.listen(3000);

