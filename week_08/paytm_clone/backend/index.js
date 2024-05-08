
const express = require('express');
const { user } = require('./routes/userRouters');

const app = express();

app.use(express.json());

app.use('/api/v1',user);

app.listen(3000);