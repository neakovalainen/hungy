import express, {type Request, type Response} from 'express'
import userService from '../services/userService.ts'

const userRouter = express.Router()

userRouter.get('/', async (_request: Request, response: Response) => {
  const users = userService.getUsers()
  return response.json(users)
})

userRouter.get('/:id', async (request: Request, response: Response) => {
  const id = request.params.id as string | undefined
  const user = await userService.getUser(id)
  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})

userRouter.post('/', async (request: Request, response: Response) => {
  try {
    const user = await userService.addUser(request.body)
    response.json(user)
  } catch (error) {
    return response.status(400).json({ error })
  }
  return
})

export default userRouter