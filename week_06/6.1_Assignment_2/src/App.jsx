import { useEffect, useState } from "react";

const App = () => {
  const [id,setId] = useState(1);

  const increaseId = () => {
    setId(id + 1);
  }

  return(<>
    <button onClick={increaseId}>Next</button>
    <br />
    <Todo id={id} />
  </>);
}

const Todo = ({id}) => {

  const [todo,setTodo] = useState({});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (response)=> {
      const t = await response.json();
      setTodo(t.todo);
      console.log(todo);
    })
  },[id]);

  return (<div>
    <h1>{todo.title}</h1>
    <br />
    <h5>{todo.description}</h5>
  </div>)
}

export default App;