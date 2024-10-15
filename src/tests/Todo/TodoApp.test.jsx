import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../Todo/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock( "../../hooks/useTodo" );

describe('Pruebas de <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, todo: 'Task 1',done: false},
            { id: 2, todo: 'Task 2',done: true},
        ],
        addTodo: jest.fn(),
        deleteTodo: jest.fn(),
        toggleTodo: jest.fn(),
        pending: 2 })

  
    test('debe de mostrar el componente correctamente ', () => {
      render(  <TodoApp />)
    //   screen.debug()

      expect( screen.getByText('Task 1') ).toBeTruthy;      
      expect( screen.getByText('Task 2') ).toBeTruthy;
      const spanElement = screen.getByText("Task 2");
      expect( spanElement.className ).toContain("text-decoration");
      expect( screen.getByText('Tareas: 2')).toBeTruthy;     

    })
    
})
