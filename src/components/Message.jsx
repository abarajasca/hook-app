import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [cords,setCords] = useState({x:0,y:0});

  const onMouseMovement = ( ({x,y}) => {  
    console.log({x,y});
    setCords({x,y});
  });  

  useEffect(() => {
    console.log("Message mounted");
    window.addEventListener('mousemove',onMouseMovement);
  
    return () => {
      console.log("Message unmounted");
      window.removeEventListener('mousemove',onMouseMovement);
    }
  }, [])
  

  return (
    <>
     <h2>Usuario ya existe.</h2>
     <p>{ JSON.stringify(cords)  }</p> 
    </>
  )
}


