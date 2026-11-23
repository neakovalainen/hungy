// insert here data fetching functionality
import { Ingredient } from '../models/ingredientModel.ts'
import { type Request } from 'express'


const getIngredient = async (id: number | undefined) => {
  const ingredient = await Ingredient.findByPk(id)
  return ingredient
}
const getIngredients = async () => {
  const data = await Ingredient.findAll()
  return data
}

const addIngredient = async (ingredient: Request["body"]) => {
  const added_ingredient = await Ingredient.create({
    ... ingredient
  })
  return added_ingredient
}

export default {
  getIngredient,
  getIngredients,
  addIngredient
}