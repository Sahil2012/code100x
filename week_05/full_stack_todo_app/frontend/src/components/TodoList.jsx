
function TodoList(props) {

    const markDone = (event) => {
        alert(event.target.value);
        console.log(event.target);
    }
    return (<div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }} >
        {
            props.todos.map((eachTodo) => {
                return (<div style={{
                    display:"flex",
                    alignItems:"start",
                    padding: "20px",
                    backgroundColor:"#ffff",
                    marginBlock: "8px",
                    color: "black",
                    flexDirection: "column",
                    width: "250px",
                    borderRadius: "10px"
                }} key={eachTodo._id}>
                    <div>{eachTodo.title}</div>
                    <div>{eachTodo.description}</div>
                    <button style={{
                        cursor: "pointer",
                        padding: "2px"
                    }} onClick={markDone}>Mark as done</button>
                </div>);
            })
        }
    </div>)
}

export default TodoList;