import axios from 'axios'
import type { Recipe, NewRecipe, RecipeIngredients, NewRecipeIngredientRelation } from '../types'
const baseUrl = '/api/ingredients'
import {getAuth} from './loginService'

const getAll = async () => {
  return await axios
    .get<Recipe[]>(baseUrl, getAuth())
    .then(response => response.data)  
}

const addNew = async (object: NewRecipe) => {
  return await axios
    .post<Recipe>(baseUrl, object, getAuth())
    .then(response => response.data)
}

const addRecipeIngredientRelation = async (object: NewRecipeIngredientRelation) => {

}

export default {
  getAll,
  addNew,
  addRecipeIngredientRelation
}