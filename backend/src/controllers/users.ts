import express, {type Request, type Response} from 'express'
import bcrypt from 'bcrypt'
import userService from '../services/userService.ts'
import { type UserType } from '../types.ts'

const userRouter = express.Router()

userRouter.get('/', async (_request: Request, response: Response) => {
  const users = await userService.getUsers()
  return response.json(users)
})

userRouter.get('/:id', async (request: Request, response: Response) => {
  const id = request.params.id as unknown as number | undefined
  const data = await userService.getUser(id)
  if (data) {
    response.json(data)
  } else {
    response.status(404).end()
  }
})

userRouter.post('/', async (request: Request, response: Response) => {
  const hashedPassword = await bcrypt.hash(request.body.password, 10)
  const user: UserType = {
      id: request.body.id,
      username: request.body.username,
      password_hash: hashedPassword
  }
  try {
    const data = await userService.addUser(user)
    response.json(data)
  } catch (error) {
    return response.status(400).json({ error })
  }
  return
})

export default userRouter