import React from "react";
import { useState } from "react";

function App() {
  
  const [totoList,setTodoList] = useState([{
    title : "Revise DSA",
    description : "Revise DSA from ONE Note"
  },{
    title : "DCC Problem",
    description : "Solve DCC on Leetcode"
  },{
    title : "Solve new DSA",
    description : "Solve atleast 2 apttern based DSA questions"
  }]);

  return (<><div>
      {
        totoList.map((eachTodo) => {return <h1>{eachTodo.title}</h1>})
      }
    </div></>);
}

export default App;