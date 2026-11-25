import { useState } from "react"
import userService from "../services/userService"
import type { NewUser } from "../types"
import { useNavigate } from "react-router-dom"

const RegistrationPage = () => {
  const [newUsername, setNewUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const add_user = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (userPassword != confirmPassword) {
      setUserPassword('')
      setConfirmPassword('')
      return console.log('oh noh, passwords do not match..')
    }
    const user_to_add: NewUser = {
      username: newUsername,
      password: userPassword
    }

    try {
      await userService.addNew(user_to_add)
      navigate('/login')
    } catch (error) {
      console.error('oh noh, error in registering user', error)
    }
  }

  return (
    <div className="centerdiv">
      <h1>Register</h1>
      <p>Provide your information below to create a new account.</p>
      <form onSubmit={add_user}>
        <label className="inputlabel">
          username
          <br/>
          <input 
            type="text"
            placeholder="Username"
            value={newUsername}
            onChange={(event) => setNewUsername(event.target.value)}
          />
        </label>
        <br />
        <label className="inputlabel">
          password
          <br/>
          <input
            type="password" 
            placeholder="Password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </label>
        <br />
        <label className="inputlabel">
          confim password
          <br/>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <br/>
        <button type="submit">register</button>
      </form>
    </div>
  )
}

export default RegistrationPage