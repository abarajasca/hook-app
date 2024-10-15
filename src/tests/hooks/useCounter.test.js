import { act } from 'react';
import { useCounter } from '../../../src/hooks/useCounter';
import { renderHook } from '@testing-library/react';

describe("Pruebas en el useCounter",() => {

    test('debe de retornar los valores por defecto', () => {
       const { result } = renderHook( () => useCounter()  );
       const { counter, decrement, increment, reset } = result.current;

       expect( counter ).toBe (10);
       expect( decrement ).toEqual( expect.any ( Function ));
       expect( increment).toEqual( expect.any( Function ));
       expect( reset).toEqual( expect.any ( Function ) );

    });

    test('debe de generar el counter con el valor de 100',()=>{
        const { result } = renderHook(()=> useCounter(100));
        const { counter } = result.current;

        expect( counter ).toEqual ( 100 );
    })

    test('debe decrementar el valor de counter',()=>{
        const { result } = renderHook(()=> useCounter() );
        const { counter, decrement } = result.current;

        act( () => {
            decrement(1);
        });

        expect( result.current.counter ).toEqual(9) ;
    })

    test(' debe incrementar el valor del counter', () => {
        const { result } = renderHook( ()=> useCounter() );
        const { increment } = result.current;

        act( ()=> increment(1));

        expect( result.current.counter ).toEqual(11);
    })

    test('debe resetear el valor inicial del counter', () => {
        const { result } = renderHook( ()=> useCounter() );
        const { increment,reset } = result.current;

        act( ()=> increment(1));
        expect( result.current.counter ).toEqual(11);
        act( ()=> reset() );
        expect( result.current.counter ).toEqual(10);
    })


});