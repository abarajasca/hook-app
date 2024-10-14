import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("todoApp")) || [];    
}

export const useTodo = () => {
    const [todos,todoDispacher] = useReducer(todoReducer,[],init);
    
    const addTodo = ( newTodo ) => {
        const action = {
            type: "add",
            payload: newTodo
        }
        todoDispacher(action);        
    }

    const deleteTodo = ( id ) => {
        const action = {
            type: "remove",
            payload: id
        }
        todoDispacher(action);        
    }

    const toggleTodo = ( id ) => {
        const action = {
            type: "toggle",
            payload: id
        }
        todoDispacher(action);        
    }

    useEffect(()=>{
        localStorage.setItem("todoApp",JSON.stringify(todos));        
    },[todos])

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        pending: todos.filter( todo => todo.done == false ).length 
    }
}
