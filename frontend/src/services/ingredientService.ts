import axios from 'axios'
import type { Ingredient, NewIngredient } from '../types'


const baseUrl = 'http://localhost:3000/ingredients'

const getAll = () => {
  return axios
    .get<Ingredient[]>(baseUrl)
    .then(response => response.data)
}

const add_new = (object: NewIngredient) => {
  return axios
    .post<Ingredient>(baseUrl, object)
    .then(response => response.data)
}

export default {
  getAll,
  add_new
}