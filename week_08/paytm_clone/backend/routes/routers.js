
const express = require('express');
const {user} = require('./userRouters');
const {account} = require('./balanceRoute');

const router = express.Router();

router.use('/user',user);
router.use('/account',account);

module.exports = {
    router
}