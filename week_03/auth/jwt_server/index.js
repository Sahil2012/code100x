
const express = require('express');
const jwt = require('jsonwebtoken');
const z = require("zod");

const app = express();

const jwtPwd = "12321";

const userSchema = z.object({
	username : z.string(),
	password : z.string()
});


const USERS = [

	{
		"username" : "demo",
		"password" : "121313"
	},
	{
		"username" : "admin",
		"password" : "12345"
	}
]


const checkUserBody = (req,res,next) => {
	try{
		userSchema.parse(req.body);
		next();
	} catch(err) {
		console.log(err);
		res.send("invalid body");
	}
};

const authenticateUser = (username,password) => {
	let u = USERS.filter((u) => u["username"] == username && u["password"] == password);
	console.log(u);
	return u.length != 0;
};

app.post("/login",express.json(),checkUserBody,(req,res) => {
	let authenticate = authenticateUser(req.body['username'],req.body['password']);
	console.log(authenticate);
	
	if(authenticate) {
		//make the token(digital signature)
		let token = jwt.sign({"username":req.body['username']},jwtPwd);
		res.status(200).json({token});
	} else {
		res.status(401).send("Invalid user credential");
	}
});


app.get("/goToHome",(req,res) => {
	let token = req.headers['authorization'];
	console.log(token);
	try{
		//verify the token and also decode it
		let decoded = jwt.verify(token,jwtPwd);
		res.status(200).send(`Welcome home ${decoded['username']}`);
	}catch(err) {
		console.log(err);
		res.status(403).send("You do not have access for the resource");
	}
});
app.listen(3000);
