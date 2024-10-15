import { render, screen } from "@testing-library/react"
import { ContextApp } from "../../ContextApp/ContextApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <ContextApp/>', () => {
  
    test('debe mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <ContextApp />
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText('Home Page') ).toBeTruthy;
      
    })

    test('debe de mostrar el LoginPage', () => {
      render(
        <MemoryRouter initialEntries={['/login']}>
            <ContextApp/>
        </MemoryRouter>
      );

    //   screen.debug();
      expect( screen.getByText('Login Page') ).toBeTruthy;
    })
    

    
})
