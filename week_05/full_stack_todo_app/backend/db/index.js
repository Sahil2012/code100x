const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahilhsgupta7:IjFRKDdTIsP4Bb1t@cluster0.lqdd7xj.mongodb.net/todos_app');



const Todo = mongoose.model('Todo',{
    title : String,
    description : String,
    status : Boolean
});

module.exports = {Todo};