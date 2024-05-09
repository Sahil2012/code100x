
const express = require('express');
const { authRequest } = require('../middlewares/authRequest');
const { User, Bank } = require('../db/userDB');
const { transferBodyValidation } = require('../middlewares/inputBodyVaildation');
const mongoose = require('mongoose');

const account = express.Router();

account.use(authRequest);

account.get('/balance',async (req,res) => {
    
    const username = req.body.username;

    const user = await User.findOne({'username' : username});
    
    if(user) {
        const bankDetails = await Bank.findOne({'userId' : user._id});
        res.json({
            'balance' : bankDetails.balance
        })
    } else {
        res.json({
            'msg' : 'Unauthenticated'
        })
    }
    
});

account.post('/transfer',transferBodyValidation,async (req,res) => {

    const session = await mongoose.startSession();
    
    session.startTransaction();

    const payer = await User.findOne({'username' : req.body.username});
    const payee = await User.findOne({'_id' : req.body.to});

    const payerBank = await Bank.findOne({'userId' : payer._id});
    if(!payerBank) {
        res.json({
            'msg' : 'Invalid account.'
        })
        return;
    }

    if(payerBank.balance < req.body.amount) {
        res.json({
            'msg' : 'Insufficient balance.'
        })
        return;
    }

    await Bank.findOneAndUpdate({'userId' : payer._id},{'$inc': {'balance' : - req.body.amount}},{new : true});
    await Bank.findOneAndUpdate({'userId' : payee._id},{'$inc': {'balance' : req.body.amount}});

    session.commitTransaction();

    res.json({
        'msg' : 'Transfer sucessful'
    })
});

module.exports = {
    account
}