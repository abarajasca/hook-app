import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState,setFormState] = useState(
        {
            username: 'test',
            email: 'fernando@google.com'
        }
    );

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        // console.log({name,value});
        setFormState({ ...formState, [name]:value});
    }

    useEffect(() => {
      // console.log("useeffect");
    },[]);
    
    useEffect(() => {
      // console.log("useeffect: formState");
    },[formState]);

    useEffect(() => {
      // console.log("useeffect: email");
    },[email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder='Username (use abc and see)'
            value={username}
            onChange={onInputChange}
            name="username"/>
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
            name="email"
            ></input>

        <button className="btn btn-primary mt-2"
          onClick={() =>  setFormState({ username: '', email: ''}) }
          >
          Reset
          </button>        

            {
              (username === "abc") && <Message></Message>
            }
    </>
  )
}

