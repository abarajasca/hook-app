import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ( {todos, deleteTodo, toggleTodo } ) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoItem>
            ))
        }
    </ul>
  )
}


