import './TodoList.css';

const TodoList = ({dataTodos, deleteData, enableEdit}) => {
    //console.log(props.dataTodos)
    return (
        <ul>
            {
                dataTodos.map((todos,idx) => {
                    return (
                    <li key={idx}>
                    {todos.title}
                    <div className="buttons">
                        <button onClick={() => enableEdit(idx, todos)}>Edit</button>
                        <button onClick={() => deleteData(idx)} className="delbtn">Delete</button>
                    </div>    
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList