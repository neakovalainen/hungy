import express from 'express'
import model from '../models/ingredientModel.ts'
const ingredientRouter = express.Router()

ingredientRouter.get('/', async (_request, response) => {
  const data = await model.Ingredient.findAll()
  console.log('got to ingredient router yay')
  console.log('trying to get ingredients!!')
  response.json(data)
})

ingredientRouter.post('/', async (request, response) => {
  try {
    const ingredient = await model.Ingredient.create({
      ... request.body
    })
    response.json(ingredient)
  } catch (error) {
    return response.status(400).json({ error })
  }
  response.send('trying?? to save a diary but idk something happened')
  return
})

export default ingredientRouter