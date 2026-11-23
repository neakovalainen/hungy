import { useState } from "react"
import loginService from "../services/loginService"
import type { NewUser } from "../types"
import ingredientService from "../services/ingredientService"

const LogInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logIn = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userToLogin: NewUser = {
      username: username,
      password: password,
    }
    try {
      const user = await loginService.login(userToLogin)
      window.localStorage.setItem(
        'loggedhungyUser', JSON.stringify(user)
      )
      console.log('added userrr', user)
      ingredientService.setToken(user.token)
      console.log('added userrr', user)
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