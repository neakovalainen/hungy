import { useState } from "react"
import loginService from "../services/loginService"
import type { NewUser } from "../types"
import ingredientService from "../services/ingredientService"
import { useNavigate } from "react-router-dom"

const LogInPage = () => {
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
      navigate('/')
    } catch (error) {
      console.error('error logging in', error)
    }
  }
  
  return (
    <div className="centerdiv">
      <h1>Welcome! please log in below :33</h1>
      <form onSubmit={logIn}>
        <div>
        <label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        </div>
        <br/>
        <label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
        <button type="submit">log in</button>
        </div>
      </form>
      <p>Don't have an account yet? you can create one here</p>
      <button type="button" onClick={() => navigate('/registration')}>register</button>
    </div>
  )
}

export default LogInPage