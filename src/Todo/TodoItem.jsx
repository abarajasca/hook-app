import React from 'react'

export const TodoItem = ( {todo, deleteTodo, toggleTodo} ) => {
  return (
    <li key={todo.id} 
        className="list-group-item d-flex justify-content-between"
        >            
        <span className={`align-self-center ${ todo.done ? "text-decoration-line-through " : ""}`}
            onClick={() => toggleTodo(todo.id)}
        >{todo.todo}</span>
        
        <button className="btn btn-danger"
            onClick={() => deleteTodo(todo.id) }
        >
            Borrar</button>
    </li>
  )
}


