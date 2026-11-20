import express from 'express'
import { Ingredient } from '../models/ingredientModel.ts'
const ingredientRouter = express.Router()

ingredientRouter.get('/', async (_request, response) => {
  const data = await Ingredient.findAll()
  console.log('got to ingredient router yay')
  console.log('trying to get ingredients!!')
  response.json(data)
})

ingredientRouter.post('/', async (request, response) => {
  try {
    const ingredient = await Ingredient.create({
      ... request.body
    })
    response.json(ingredient)
  } catch (error) {
    return response.status(400).json({ error })
  }
  return
})

export default ingredientRouter