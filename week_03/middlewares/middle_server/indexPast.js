
const express = require('express');

const app = express();

//app.use(express.json());

app.get("/",(req,res) => {

	console.log("Inside Home");
	res.json("Welcome to home");
});

app.post("/postHome",express.json(), (req,res) => {
	
	console.log("Inside post Home" + req.body.demo);
	res.json("Welcome postHome");
});


app.listen(3000,() => {
	
	console.log("litsnening at port 3000");
});
