import { render, screen } from "@testing-library/react"
import { HomePage } from "../../ContextApp/HomePage"
import { UserContext } from "../../ContextApp/context/UserContext";

describe('Pruebas de <ContextApp />', () => {
  

    const user = {
        id: 1,
        username: 'abc',
        email: 'abc@google.com'
    }

    test('debe mostrar el componente sin el usuario', () => {
      render( 
        <UserContext.Provider value={{ user: null }}>
            <HomePage />
        </UserContext.Provider>
       );

      //  screen.debug();

       const preTag = screen.getByLabelText('pre');
       expect (preTag.innerHTML ).toBeNull;
    })

    test('debe mostrar el componente con el usuario', () => {
      render( 
        <UserContext.Provider value={ {user} }>
            <HomePage />
        </UserContext.Provider>
      );

      const preTag = screen.getByLabelText('pre');      
      expect( preTag.innerHTML).toEqual(JSON.stringify(user));

    //   screen.debug();

    })
    
    
})
