import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
    const [counter,setCounter] = useState(initialValue);
    const increment = (dx) => { 
        setCounter(counter + dx);
    }
    const decrement = (dx) => { 
      if (counter > 1 ) setCounter(counter - dx); 
    }
    const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset
  }
}


