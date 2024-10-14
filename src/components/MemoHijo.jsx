import { memo } from 'react';

export const MemoHijo = memo( ({ numero, incrementar }) => {

    console.log('Updated del hijo.');
    
  return (
    <button className="btn btn-primary"
        onClick={ () => incrementar ( numero ) }
    >
      { numero }
    </button>
  )
})


