
const express = require('express');
const zod = require('zod');

const app = express();

const schema = zod.object({
	username : zod.string(),
	email : zod.string().email(),
	password : zod.string().min(8)
});

const checkReqBody = (req,res,next) => {
	
	res.send(schema.parse(req.body));
}

app.use(express.json());

app.post("/login",checkReqBody);

app.listen(3000,()=> console.log("listening on port 3000"));
