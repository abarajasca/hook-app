import React, { useState } from 'react'
import { CounterWithHook } from './CounterWithHook'
import { TodoApp } from '../Todo/TodoApp'
import { SetFocus } from './SetFocus';
import { MemoPadre } from './MemoPadre';
import { SimpleForm } from './SimpleForm';
import { FormWithHook } from './FormWithHook';
import { MultipleCustomHooks } from './MultipleCustomHooks';
import { BrowserRouter } from 'react-router-dom';
import { ContextApp } from '../ContextApp/ContextApp';

export const HookApp = () => {
    const [example,setExample] = useState('counter');

    
  return (
    <>
     <h1>Hook demo examples</h1>
     <button className={`btn btn-outline-primary mt-2 ${ example === "counter" ? "active": "" }`}
        onClick={() => setExample('counter') }
        >
        Counter</button> 
     <button className={`btn btn-outline-primary mt-2 ${ example === "todo" ? "active": "" }`}
        onClick={() => setExample('todo') }
     >
      Todo</button>

      <button className={`btn btn-outline-primary mt-2 ${ example === "focus" ? "active": "" }`}
        onClick={() => setExample('focus') }
     >
      Focus</button> 

      <button className={`btn btn-outline-primary mt-2 ${ example === "memo" ? "active": "" }`}
        onClick={() => setExample('memo') }
     >
      Memo</button> 

      <button className={`btn btn-outline-primary mt-2 ${ example === "simplef" ? "active": "" }`}
        onClick={() => setExample('simplef') }
     >
      Simple Form</button> 
      
      <button className={`btn btn-outline-primary mt-2 ${ example === "formhook" ? "active": "" }`}
        onClick={() => setExample('formhook') }
     >
      Form With hook</button> 

      <button className={`btn btn-outline-primary mt-2 ${ example === "multiplehooks" ? "active": "" }`}
        onClick={() => setExample('multiplehooks') }
     >
      Multiple hooks</button> 

      <button className={`btn btn-outline-primary mt-2 ${ example === "context" ? "active": "" }`}
        onClick={() => setExample('context') }
     >
      Context & Router</button> 


     <hr/>
     
        {
            (example === 'counter') && <CounterWithHook/>
            
        }
        {
            (example === 'todo') && <TodoApp/>
        }
        {
            (example === 'focus') && <SetFocus/>
        }
        {
            (example === 'memo') && <MemoPadre/>
        }
        {
            (example === 'simplef') && <SimpleForm/>
        }
        {
            (example === 'formhook') && <FormWithHook/>
        }
        {
            (example === 'multiplehooks') && <MultipleCustomHooks/>
        }
        {
            (example === 'context') && (
              <BrowserRouter>
                <ContextApp/>
              </BrowserRouter>
        )
        }


        
     
    </>
  )
}
