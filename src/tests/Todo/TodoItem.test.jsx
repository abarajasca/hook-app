import { fireEvent, render,screen } from "@testing-library/react";
import { TodoItem } from "../../Todo/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        todo: 'Task 1',
        done: false
    }

    const deleteTodoMock = jest.fn();
    const toggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el Todo Pendiente de Completar', () => {
      render( <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
      
    //   screen.debug();

      const liElement = screen.getByRole('listitem');
      expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

      const spanElement = screen.getByText('Task 1');
      expect( spanElement.className ).toEqual('align-self-center ');

    })

    test('debe mostrar el Todo completado', () => {
        todo.done = true;
        render( <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
        
        // screen.debug();
  
        const spanElement = screen.getByText('Task 1');
        expect( spanElement.className ).toContain('text-decoration-line-through');
  
    })

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render( <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
                  
        const spanElement = screen.getByText('Task 1');
        fireEvent.click( spanElement );

        expect( toggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

    test('button debe de llamar el deleteTodo', () => {
        render( <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
        
        const button = screen.getByRole('button');
  
        fireEvent.click ( button );

        expect ( deleteTodoMock ).toHaveBeenCalledWith(todo.id);
    })    

    
});