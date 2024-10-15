import { renderHook } from "@testing-library/react";
import { useFormAction } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { act } from "react";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Abc',
        email: 'abc@google.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook( ()=> useForm(initialForm));
        const { formState,onInputChange,resetForm} = result.current;

        expect( formState.name ).toBe("Abc");
        expect( formState.email ).toBe("abc@google.com");
        expect( onInputChange).toEqual( expect.any ( Function ));
        expect( resetForm ).toEqual( expect.any( Function ));
    })

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;

        act( () => onInputChange({ target: {name: 'name', value: 'Abc updated'}}) );
        
        expect( result.current.formState.name).toEqual('Abc updated');
        
    })

    test('reset debe regresar los valores iniciales', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, resetForm } = result.current;

        act( () => { 
                onInputChange({ target: {name: 'name', value: 'Abc updated'}})                 
                resetForm();
            });        
        expect( result.current.formState.name).toEqual('Abc');
    })
});
