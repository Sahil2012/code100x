
const mongoose = require('mongoose');

mongoose.connect('');

const userSchema = {
    username : String,
    name : {
        firstName : String,
        lastName : String
    },
    password : String
}

const bankSchema = {
    userId : {type: mongoose.Schema.Types.ObjectId,ref : 'User'},
    balance : Number
}

const User = mongoose.model('User',userSchema);
const Bank = mongoose.model('Bank',bankSchema);

module.exports = {
    User,
    Bank
};