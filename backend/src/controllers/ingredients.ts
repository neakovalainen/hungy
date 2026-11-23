import express, {request, type Request, type Response} from 'express'
import ingredientService from '../services/ingredientService.ts'
import jwt from 'jsonwebtoken'
import userService from '../services/userService.ts'
import type { extendedJwtPayload } from '../types.ts'

const ingredientRouter = express.Router()

const extractToken = (request: Request) => {
  const authorization = request.get('authorization')
  if ( authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return ''
}

ingredientRouter.get('/:id', async (_request: Request, response: Response) => {
  const id = request.params.id as unknown as number | undefined
  const data = await ingredientService.getIngredient(id)
  if (data) {
    response.json(data)
  } else {
    response.status(404).end()
  }
})

ingredientRouter.get('/', async (_request: Request, response: Response) => {
  const data = await ingredientService.getIngredients()
  console.log('got to ingredient router yay')
  console.log('trying to get ingredients!!')
  response.json(data)
})

ingredientRouter.post('/', async (request: Request, response: Response) => {
  if (!process.env.SECRET) {
    return response.status(400)
  }
  console.log('REQUEST', request.headers)
  const token = jwt.verify(extractToken(request), process.env.SECRET) as extendedJwtPayload
  console.log('TOKEN', token)
  console.log('token id', token.id)
  if (!token.id) {
    return response.status(401).json({ error: 'invalid token....'})
  }
  const user = await userService.getUser(token.id)

  if (!user) {
    return response.status(401).json({ error: 'user not found' })
  }
  const ingredient = {
    name: request.body.name,
    user_id: user.id,
  }
  try {
    const data = await ingredientService.addIngredient(ingredient)
    return response.json(data)
  } catch (error) {
    return response.status(400).json({ error })
  }
})

export default ingredientRouter