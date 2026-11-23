import { useState } from "react"
import userService from "../services/userService"
import type { NewUser } from "../types"

const RegistrationPage = () => {
  const [newUsername, setNewUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const add_user = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const user_to_add: NewUser = {
      username: newUsername,
      password: userPassword
    }

    try {
      await userService.addNew(user_to_add)
    } catch (error) {
      console.error('oh noh, error in registering user', error)
    }
  }

  return (
    <div>
      <h1>arrived at registration page yay</h1>
      <p>not yipe </p>
      <form onSubmit={add_user}>
        <label>
          username
          <input 
            type="text"
            value={newUsername}
            onChange={(event) => setNewUsername(event.target.value)}
          />
        </label>
        <label>
          password
          <input
            type="password" 
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </label>
        <button type="submit">register</button>
      </form>
    </div>
  )
}

export default RegistrationPage