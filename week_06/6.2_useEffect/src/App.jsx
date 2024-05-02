import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const[id,setId] = useState(1);

  


  return (<div>
    <button onClick={() => {setId(1)}}>1</button>
    <button onClick={() => {setId(2)}}>2</button>
    <button onClick={() => {setId(3)}}>3</button>
    <button onClick={() => {setId(4)}}>4</button>
    <Todo id={id} />
  </div>);
}

const Todo = ({id}) => {
  
  const[todo,setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodo(res.data.todo);
    })
  },[id]);

  return <div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
    {/* {todo} */}
  </div>
}

export default App;