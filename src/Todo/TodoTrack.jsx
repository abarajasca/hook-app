import React from 'react'

export const TodoTrack = ({ length, pending }) => {
  return (
    <h3>
     <span>Tareas: {length} <small>, Pendientes: { pending }</small></span> 
    </h3>
  )
}
