import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    // let dbTodo = JSON.parse(localStorage.getItem("Todos"));
    // const getTodos = () => {
    //     console.log(dbTodo);
    // }

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
            const newTodo = [todo, ...todos];
            setTodos(newTodo);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)));
    }

    const removeTodo = index => {
        const removeArr = [...todos].filter((todo, i) => i!==index);

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodo);
    }

    return(
        <>
            <h2>What's the plan for today?</h2>
            <TodoForm onSubmit={addTodo}/>
            <h3 className="all-todos">All my todos</h3>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </>
    )
}

export default TodoList;
