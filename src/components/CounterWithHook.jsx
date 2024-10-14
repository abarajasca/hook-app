import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {
  const  { counter,increment,decrement,reset }  = useCounter(10);

  return (
    <>
     <h1>Counter with Hook : {counter} </h1> 
     <button className="btn btn-primary mb-2"
        onClick={()=>decrement(1)}
     >-1</button>
     <button className="btn btn-primary mb-2"
      onClick={reset}
      >Reset</button>
     <button className="btn btn-primary mb-2"
      onClick={()=>increment(1)}
      >+1</button>
    </>
  )
}


