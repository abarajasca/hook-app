import { TodoList } from './TodoList';
import { TodoForm} from './TodoForm';
import { useTodo } from '../hooks/useTodo';
import { TodoTrack } from './TodoTrack';

export const TodoApp = () => {

  const {todos,addTodo, deleteTodo, toggleTodo, pending} = useTodo();
  
  return (
    <div>
        <h1>TodoApp</h1>
        <TodoTrack length={todos.length} pending={pending}></TodoTrack>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoForm onAddTodo={addTodo}></TodoForm>
            </div>
        </div>        
    </div>
  )
}
