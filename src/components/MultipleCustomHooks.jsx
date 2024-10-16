import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

  const {counter,increment,decrement} = useCounter(1);
  const { data,isLoading,hasError,error }  =  useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <div>
      <h1>Informacion de Pokemon</h1>
      <hr/>
      
      {
        (error) && <p>{ error.message }</p>        
      }
      
     {
        (isLoading) ? <LoadingMessage/> : 
         (
            <PokemonCard 
                id={data.id} 
                name={ data.name } 
                sprites = { [
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ]
                }
                />

         )
     }

      <button className="btn btn-primary mt-2"
        onClick={() => decrement(1) }
      >Anterior</button> 
      <button className="btn btn-primary mt-2"
        onClick={() => increment(1) }
      >Siguiente</button> 
     
    </div>
  )
}


