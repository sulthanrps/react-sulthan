import './Todo.css';
import { useState } from 'react';
import TodoList from "../todo-list/TodoList";
import TodoCreate from '../todo-create/todoCreate';

const Todo = () => {
    const [getTodos, setTodos] = useState([])

    const [editValue, seteditValue] = useState(null);
    const [selectedId, setselectedId] = useState(null);
    const [editTitle, setEditTitle] = useState("");




    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        //console.log(getTodos)
    }

    const deleteData = (idx) => {
        const tempData = [...getTodos]
        tempData.splice(idx, 1)
        setTodos(tempData)
    }

    const editData = () => {
        const tempData = [...getTodos];
        // tempData[selectedId] = editValue;
        // setTodos(tempData);
        
        
        const gatau = tempData.map((item) =>{
            if(item.id === editValue.id){
                return({
                    ...item,
                    title : editTitle
                })
            }

            return item;
        })
        console.log(gatau);
        console.log(editValue);
        console.log(editTitle)
        setTodos(gatau);
        setselectedId(null);
        seteditValue(null);

    };

    const enableEdit = (idx, value) => {
        setselectedId(idx);
        seteditValue(value);
    };

    return(
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>


            <TodoList  dataTodos={getTodos} deleteData={deleteData} enableEdit={enableEdit}/>

            
                {editValue && (
                    <>
                        <input value={editTitle.title} onChange = {(e) => setEditTitle(e.target.value)}/>

                        <button className="editbtn" onClick={() => editData()}>Edit</button>
                    </>
                )}
            

        </div>
    )
}

export default Todo;