import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithHook = ( ) => {
    const { formState,onInputChange,resetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username,email,password } = formState;
    
    return (
      <>
          <h1>Formulario Simple</h1>
          <hr />
          <input 
              type="text"
              className="form-control"
              placeholder='Username'
              value={username}
              onChange={onInputChange}
              name="username"/>
          <input 
              type="email"
              className="form-control mt-2"
              placeholder="fernando@google.com"
              value={email}
              onChange={onInputChange}
              name="email"
              ></input>    
          <input 
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              value={password}
              onChange={onInputChange}
              name="password"
              ></input>    

          <button className="btn btn-primary mt-2"
            onClick={ () => resetForm() }
          >Reset</button>    
  
      </>
    )
}
