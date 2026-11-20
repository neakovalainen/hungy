import { Ingredient } from './ingredientModel.ts'
import { User } from './userModel.ts'

Ingredient.sync()
User.sync()

export default {
  Ingredient,
  User
}