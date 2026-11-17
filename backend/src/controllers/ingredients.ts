import express from 'express'
import ingredientService from '../services/ingredientService.ts'

const ingredientRouter = express.Router()

ingredientRouter.get('/', (_request, response) => {
  const data = ingredientService.getIngredients()
  console.log('got to ingredient router yay')
  console.log('trying to get ingredients!!')
  response.send(data)
})

ingredientRouter.post('/', (_request, response) => {
  response.send('trying?? to save a diary')
})

export default ingredientRouter