import { todoReducer } from "../../reducers/TodoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        done: 'Demo todo',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );
        expect ( newState ).toEqual ( initialState );
    });

    test('debe agregar un todo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 2,
                todo: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );        
        expect( newState.length ).toEqual( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('debe eliminar un todo', () => {
        const action = {
                type: 'remove',
                payload: 1
        }        

        const newState = todoReducer(initialState,action);
        expect ( newState.length ).toEqual(0);        
        expect( newState ).toEqual([]);
    });

    test('debe realizar el togle del cambio del done', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const newState = todoReducer(initialState,action);
        expect( newState[0].done ).toBeTruthy;
    });
});