import { useState } from "react"
import loginService from "../services/loginService"
import type { UserAndToken } from "../types"
import ingredientService from "../services/ingredientService"

const LogInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logIn = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user: UserAndToken = {
      username: username,
      password: password,
      token: ''
    }
    try {
      await loginService.login(user)
      ingredientService.setToken(user.token)
    } catch (error) {
      console.log(username)
      console.log(password)
      console.error('error logging in', error)
    }
  }
  
  return (
    <div>
      <h1>Welcome! please log in below :33</h1>
      <form onSubmit={logIn}>
        <label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">log in</button>
      </form>
    </div>
  )
}

export default LogInPage