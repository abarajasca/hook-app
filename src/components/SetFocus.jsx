import { useRef } from "react";

export const SetFocus = () => {
    const inputRef = useRef();

    const setFoco = () => {
        console.log(inputRef);
        inputRef.current.focus();
    }

  return (
    <>
    <div>
        <input type="text" placeholder="click en boton para poner el foco" 
            ref={ inputRef }
        /> 
    </div>
    <div>    
        <button className="btn btn-primary mt-2"
            onClick={() => setFoco()}
        >Poner foco</button>
    </div>
    </>
  )
}

