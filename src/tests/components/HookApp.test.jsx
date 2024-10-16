import { fireEvent, getElementError, render, screen } from "@testing-library/react";
import { HookApp } from "../../components/HookApp";

describe('Test <HookApp />', () => {
  test('should verify component content', () => {
    render( <HookApp />);

    expect( screen.getByText('Hook demo examples') ).toBeTruthy;
    expect( screen.getByText('Counter with Hook : 10') ).toBeTruthy; 
    expect( screen.queryByText('TodoApp')).toBeNull;
    
  })

  test('should load <TodoApp/> when click', () => {
    render( <HookApp/>);

    const btnTodo = screen.getAllByRole('button',{name: 'Todo'})[0];    
    fireEvent.click( btnTodo );
    expect( screen.getByText('TodoApp') ).toBeTruthy;

  })
  
  
})



