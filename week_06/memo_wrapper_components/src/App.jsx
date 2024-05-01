import { memo } from "react";
import { useState } from "react";

const App = () => {

  const [todos,setTodo] = useState([{
    title : "t1",
    description : "d1"
  },{
    title : "t2",
    description : "d2"
  },{
    title : "t3",
    description : "d3"
  }]);

  const handleAdd = () => {
    setTodo([...todos,{
      title: Math.random(),
      description: Math.random()
    }]);
  }


  return (<div>
    <button onClick={handleAdd}>
      Add Todo
    </button>
    <br />
    {
      // todos.map(todo => <Todo title={todo.title} description={todo.description} />)
      todos.map(todo => <TodoCard>
        <Todo title = {todo.title} description = {todo.description} />
      </TodoCard>)
    }
    </div>);

    
}

const Todo = memo(({title,description}) => {
  return (<div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>);
})

const TodoCard = memo(({children}) => {
  return (<>
    {children}
  </>);
})

export default App;