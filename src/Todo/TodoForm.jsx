import React, { useRef } from 'react'

export const TodoForm = ( {onAddTodo} ) => {

    const refTodo = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const todoValue = refTodo.current.value
        if (todoValue.length > 2 ){
          onAddTodo({
            id: new Date().getTime(),
            todo: todoValue,
            done: false
          });
          refTodo.current.value = "";
        }
    }

  return (
    <form>
        <input
            ref={refTodo} 
            type="text"
            placeholder="Que hay por hacer?"
            className="form-control"            
        />
        <button             
            onClick={onSubmit}
            className="btn btn-primary mt-2">
            Agregar    
        </button>        
    </form>
  )
}


