import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user,setUser } = useContext( UserContext)

    const setLogin = () => {
      setUser({id: 234343,username: "myuser",email: "email@google.com"})
    }

    return (
      <>
          <h1>Login Page</h1>
          <hr />
          <pre>
            { JSON.stringify(user) }
          </pre>
          <button 
            className="btn btn-primary"
            onClick={() => setLogin() }
            >
              Set User
            </button>
      </>
    )
  }
  