import express, {type Request, type Response} from 'express'
import { User } from '../models/userModel.ts'

const userRouter = express.Router()

userRouter.get('/', async (_request: Request, response: Response) => {
  const users = await User.findAll()
  response.json(users)
})

userRouter.get('/:id', async (request: Request, response: Response) => {
  const id = request.params.id as string | undefined
  const user = await User.findByPk(id)
  
  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})

userRouter.post('/', async (request: Request, response: Response) => {
  try {
    const user = await User.create(request.body)
    response.json(user)
  } catch (error) {
    return response.status(400).json({ error })
  }
  return
})

export default userRouter