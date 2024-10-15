import { render,screen } from "@testing-library/react"
import { CounterWithHook } from "../../components/CounterWithHook"

describe('test component', () => {

    test('debe contener los elementos esperados', () => {
        render( <CounterWithHook /> );

        expect ( screen.getByText('Counter with Hook : 10'));
        const nextButton = screen.getByRole("button",{ name: '+1'});        
        expect( nextButton.className ).toEqual("btn btn-primary mb-2");
        // screen.debug();
    })
})