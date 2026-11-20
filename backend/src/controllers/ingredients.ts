import express, {request, type Request, type Response} from 'express'
import ingredientService from '../services/ingredientService.ts'
const ingredientRouter = express.Router()

ingredientRouter.get('/:id', async (_request: Request, response: Response) => {
  const id = request.params.id as string | undefined
  const data = ingredientService.getIngredient(id)
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
  try {
    const data = await ingredientService.addIngredient(request.body)
    return response.json(data)
  } catch (error) {
    return response.status(400).json({ error })
  }
})

export default ingredientRouter