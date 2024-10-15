import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../ContextApp/context/UserContext";
import { LoginPage } from "../../ContextApp/LoginPage";

describe('Pruebas con <LoginPage />', () => {

    const user = {id: 234343,username: "myuser",email: "email@google.com"};

  test('debe mostrar el componente sin el usuario', () => {
    render( 
        <UserContext.Provider value={{user: null}}>
            <LoginPage/>
        </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBeNull;
  })

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    
    const setUserMock = jest.fn();

    render(
        <UserContext.Provider value={{ user: {id: 234343,username: "myuser",email: "email@google.com"},setUser: setUserMock }}>
            <LoginPage/>
        </UserContext.Provider>
    );    

    const btn = screen.getByRole('button');
    // screen.debug();
    fireEvent.click ( btn );
    expect( setUserMock ).toHaveBeenCalledWith(user);
    
  })
  
})
