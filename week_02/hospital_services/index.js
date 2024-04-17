
let Hospital = require('./hospital.js');

const express = require('express');

const app = express();

let hospital = new Hospital([]);

app.get('/',(req,res) => {
	
	console.log('At home route');
	
	res.send('Welcome to Hospital');
});

app.listen(5000,() => {
	console.log('listening at port 5000');
});
