import { useState } from "react"
import loginService from "../services/loginService"
import type { NewUser } from "../types"
import ingredientService from "../services/ingredientService"
import { useNavigate } from "react-router-dom"

const LogInPage = ({ setLoggedIn }: { setLoggedIn:(value: boolean) => void }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const logIn = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userToLogin: NewUser = {
      username: username,
      password: password,
    }
    try {
      const user = await loginService.login(userToLogin)
      window.localStorage.setItem(
        'loggedhungyUser', JSON.stringify(user.username)
      )
      ingredientService.setToken(user.token)
      setLoggedIn(true)
      navigate('/')
    } catch (error) {
      console.error('error logging in', error)
    }
  }
  
  return (
    <div className="centerdiv">
      <h1>Welcome! <br/> Please log in below</h1>
      <form onSubmit={logIn}>
        <div>
        <label className="inputlabel">
          username
          <br/>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        </div>
        <br/>
        <label className="inputlabel">
          password
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
        <button type="submit">log in</button>
        </div>
      </form>
      <br/>
      <p>Don't have an account yet? <br/>you can create one here</p>
      <button type="button" onClick={() => navigate('/registration')}>register</button>
    </div>
  )
}

export default LogInPage