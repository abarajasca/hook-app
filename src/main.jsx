import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import HooksApp from './HooksApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


import './style.css';
import { CounterWithHook } from './components/CounterWithHook';
import { SimpleForm } from './components/SimpleForm';
import { FormWithHook } from './components/FormWithHook';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
import { SetFocus } from './components/SetFocus';
import { MemoPadre } from './components/MemoPadre';


import { TodoApp } from './Todo/TodoApp';
import { ContextApp } from './ContextApp/ContextApp';
import { HookApp } from './components/HookApp';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    {/* <SimpleForm></SimpleForm> */}
    {/* <FormWithHook></FormWithHook> */}
    <hr />
    {/* <CounterWithHook></CounterWithHook> */}
    {/* <MultipleCustomHooks></MultipleCustomHooks> */}
    {/* <SetFocus></SetFocus> */}
    {/* <MemoPadre></MemoPadre> */}
    {/* <TodoApp></TodoApp> */}
    {/* <BrowserRouter>
      <ContextApp />
    </BrowserRouter>
    */}
    <HookApp/>
    </> 
  // </StrictMode>,
)
