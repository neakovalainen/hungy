import axios from 'axios'
import type { Ingredient, NewIngredient } from '../types'


const baseUrl = '/api/ingredients'

const getAll = () => {
  console.log('got to axios!!!')
  return axios
    .get<Ingredient[]>(baseUrl)
    .then(response => response.data)
}

const addNew = (object: NewIngredient) => {
  return axios
    .post<Ingredient>(baseUrl, object)
    .then(response => response.data)
}

export default {
  getAll,
  addNew
}