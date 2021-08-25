import './todoDelete.css'

const TodoDelete = (props, refresh) => {
    const todos = props.forDelete;
    const handleDelete = (index) => {
       // console.log(todos)
        const delData = todos.filter((data, indexDalam) => indexDalam !== index);
        props.refreshTodos(delData)
    }

    return(
        <button className="delbtn" onClick={handleDelete}>Delete</button>
    )
}

export default TodoDelete;
