import React, { useState } from 'react';

// const intial = 0;
function TodoForm(props) {

    const[input, setInput] = useState(props.edit ? props.edit.value : '');
    const [todoTitle, setTodoTitle] = useState(props.edit ? props.edit.title : '');

    // const inputRef = useRef(null);

    // useEffect(()=> {
    //     inputRef.current.focus();
    // })

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleTitleChange = e => {
        setTodoTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            todoTitle: todoTitle,
            id: todoTitle + Math.floor(Math.random() * 10000),
            // id: todoTitle + Math.floor(Math.random() * 9),
            text: input
        });
        setInput("");
    };
    
    return(
        <form className="todo-form animate__animated animated__fadeInRight" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
                    <input name="title" placeholder="Todo title" value={todoTitle} className="todo-input edit" onChange={handleTitleChange} />
                    <br/><br/>
                    <input name="text" placeholder="Update your todo" value={input} className="todo-input edit" onChange={handleChange} />
                    <br/><br/>
                    <button className="todo-button edit-button animate__animated animated__fadeIn animated__slower">Update</button>
            </>
        ) : (
            <>
                    <input name="title" placeholder="Todo title" value={todoTitle} className="todo-input" onChange={handleTitleChange} />
                    <br/><br/>
                    <input name="text" placeholder="Add a todo" value={input} className="todo-input" onChange={handleChange} />
                    <br/><br/>
                    <button className="todo-button animate__animated animated__fadeIn animated__slower">Add todo</button>
            </>
        )}
        </form>
    )
}

export default TodoForm;