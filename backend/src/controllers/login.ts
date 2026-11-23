import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import express, {type Request, type Response} from 'express'
import config from '../utils/config.ts'
import userService from '../services/userService.ts'

const loginRouter = express.Router()

loginRouter.post('/', async (request: Request, response: Response) => {
  if (!request.body.password) {
    return response.status(401).end()
  }

  const user = await userService.getUserByUsername(request.body)

  const correctPassword: boolean = user === null ?
  false
  : await bcrypt.compare(request.body.password, user.password_hash)

  if (!(user && correctPassword)) {
    return response.status(401).json({
      error: 'either the username or the password was invalid'
    })
  }
  console.log('AFTER PASSWORD CHECK')
  const assignedToken = {
    username: user.username,
    id: user.id
  }
  if (!config.SECRET) {
    throw new Error('error with token authentication')
  }
  const token = jwt.sign(assignedToken, config.SECRET)
  console.log('token assigned', token)
  return response.status(200).send({ token, username: user.username })
})

export default loginRouter