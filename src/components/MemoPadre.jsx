import React, { useCallback, useState } from 'react'
import { MemoHijo } from './MemoHijo';


const numeros = [2,4,6,8,10];

export const MemoPadre = () => {

    
    console.log('Updated del padre');

    const [valor,setValor] = useState(0);

    const incrementar = useCallback(
      ( num ) => {
        setValor( (v) => v + num);
      },
      [],
    )    

    //const incrementar = ( num ) => setValor( valor + num);

  return (
    <div>
        <h1>Padre</h1>
        <p> Total: { valor } </p>
        <hr />
        {
            numeros.map( n => (
                <MemoHijo 
                    key={ n }
                    numero= { n }
                    incrementar={ incrementar }
                />
            ))
        }

    </div>
  )
}


