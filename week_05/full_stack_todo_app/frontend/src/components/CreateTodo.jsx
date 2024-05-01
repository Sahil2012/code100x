import { useState } from "react";

function CreateTodo(props) {

    const [title,setTitle] = useState();
    const [description,setDescription] = useState();

    const addTodos = () => {
        console.log("in add Todo");
        fetch('http://localhost:3000/addTodos',{
            method:"POST",
            body : JSON.stringify({
                
                title : title,
                description : description
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(async (res) => {
            console.log(await res.json());
        })
        
    }

    return (
        <div style={{
            display : "flex",
            flexDirection : "column",
            alignItems: "center"
        }}>
            <input type="text" placeholder="Todo title" style={{
                padding: "5px",
                marginBlock : "10px",
                width : "250px"
            }} onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <input type="text" placeholder="Todo Description" style={{
                padding: "5px",
                marginBlock : "10px",
                width : "250px",
                height: "50px"
            }} onChange={(e) => {
                setDescription(e.target.value)
            }}/>
            <button onClick={addTodos} style={{
                width: "120px",
                marginBlock: "5px",
                background: "blue",
                border: "none",
                padding: "10px",
                cursor: "pointer"
            }}>
                Add Todo
            </button>
        </div>
    );
}

export default CreateTodo;