
const express = require('express');
const cors = require('cors');
const { Todo } = require('./db');



const app = express();

app.use(cors());
app.get('/allTodos',async (req,res) => {

    const allTodos = await Todo.find();
    
    res.json(allTodos);
});

// json parsing middleware
app.use(express.json());

app.post('/addTodos',async (req,res) => {
    console.log(req.body);
    const newTodo = new Todo({
        title : req.body.title,
        description : req.body.description,
        status : false
    });

    const savedtodo = await newTodo.save();

    res.json({
        'id' : savedtodo._id
    })
})

app.post('/markTodo/:todoName',async (req,res) => {

    const todo = await Todo.updateOne({title : req.params.todoName},{status : true});

    res.json({
        'message' : 'status updated'
    })
    
})

app.listen(3000);