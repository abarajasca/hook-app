import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    const { user } = useContext( UserContext)

    return (
      <>
          <h1>Home Page <span><small>:{user?.username}</small></span></h1>
          <hr />
          <pre aria-label="pre">
            { JSON.stringify(user)}
          </pre>
      </>
    )
  }
  