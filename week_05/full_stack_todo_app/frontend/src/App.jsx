import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {

  const [todos,setTodos] = useState([]);

  fetch('http://localhost:3000/allTodos').then(async (res) => {
    const todoList = await res.json();
    setTodos(todoList);
  });

  return (<div>
    <CreateTodo todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} />
  </div>);
}

export default App;