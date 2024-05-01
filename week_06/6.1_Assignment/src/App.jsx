import { useEffect } from "react";
import { useState } from "react";

//rendering the todos every 5 secs using useEffect
const App = () => {

  const[todos,setTodos] = useState([]);

  /*
  * in useEffect the first parameter is the function which can not be async
  * useEffect(async ()=>{} , []) XXXXXXXXXXXXXXXXXXX Not allowed
  */
  useEffect(() => {
    fetch('https://sum-server.100xdevs.com/todos').then(async (response) => {
      const todoList = await response.json();
      setTodos([...todos,...todoList.todos]);
    })
  },[setTimeout(() => {},50000)]);


  return (<>
    {todos.map((e) => e.title)}
  </>)
}

export default App;