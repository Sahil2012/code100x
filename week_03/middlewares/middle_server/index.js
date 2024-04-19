
const express = require('express');

const app = express();

app.use(express.json());

let startTime,endTime;

const d = new Date();

let hitCount = 0;

const getStartTime = (req,res,next) => {
	startTime = d.getTime();
	console.log(startTime);
	hitCount ++;
	console.log(`app has been hit ${hitCount} times.`);

	next();
};

const calculateTime = () => {
	endTime = d.getTime();
	console.log(endTime);
	console.log(`Total time for execution ${endTime - startTime}`);
};

app.get("/",(req,res) => {

	console.log("Inside Home");
	res.json("Welcome to home");
});

app.post("/postHome",getStartTime, (req,res,next) => {
	
	console.log("Inside post Home" + req.body.demo);
	res.json("Welcome postHome");

	for(let i = 0; i < 100000; i++);
	next();

},calculateTime);


app.listen(3000,() => {
	
	console.log("litsnening at port 3000");
});
