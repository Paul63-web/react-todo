import React, {useState} from 'react';
// import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const[edit, setEdit] = useState({
        id: null,
        todoTitle: '',
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            todoTitle: '',
            value: ''
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.length> 0 ? todos.map((todo, index)=>(
        <>
            <div className={todo.isComplete? 'todo-row  complete' : 'todo-row'}>
                <div key={index} onClick={()=> completeTodo(todo.id)}>
                    {todo.todoTitle} | {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={()=> removeTodo(index)} className="delete-icon"/>
                    {todo.isComplete ? null : <TiEdit onClick={()=> setEdit({id: todo.id, title: todo.todoTitle, value: todo.text})}/>}
                    
                </div>
            </div>
        </>
    )) : <div className="response-msg">You do not have any todo yet</div>;
}

export default Todo;