
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahilhsgupta7:IjFRKDdTIsP4Bb1t@cluster0.lqdd7xj.mongodb.net/paytm');

const userSchema = {
    name : {
        firstName : String,
        lastName : String
    },
    password : String
}

const User = mongoose.model('User',userSchema);

module.exports = {
    User
};