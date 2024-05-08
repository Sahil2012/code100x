
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

const User = mongoose.model('User',userSchema);

module.exports = {
    User
};