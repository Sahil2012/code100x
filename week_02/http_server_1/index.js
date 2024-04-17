
const express = require("express");

const app = express();


app.get("/home", (req,res)=> {
	console.log("from home /");
	res.send("from home");
});


app.post("/addTodo", (req,res) => {
	console.log("entered into add Todo");
	res.send("from addTodo");
});

app.listen(3000,() => {
	console.log("listening at port 3000");
});
