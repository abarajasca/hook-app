import React, { useState } from 'react'

const CounterApp = () => {

    const [stateCounter,setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3:30
    });

    const { counter1,counter2,counter3} = stateCounter; 
       

  return (
    <>
      <h1>Counter : {counter1} </h1>
      <h1>Counter1 : {counter2} </h1>
      <h1>Counter2 : {counter3} </h1>
      <hr>
      </hr>
      <button className="btn btn-primary" onClick={() => setCounter({...stateCounter,counter1: counter1+1})}>+1</button>
    </>
  )
}

export default CounterApp
