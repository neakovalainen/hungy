import axios from 'axios'
import type { Ingredient, NewIngredient } from '../types'
const baseUrl = '/api/ingredients'
import {getAuth} from './loginService'

const getAll = async () => {
  console.log('curr_user', )
  return await axios
    .get<Ingredient[]>(baseUrl, getAuth())
    .then(response => response.data)
}

const addNew = async (object: NewIngredient) => {
  return await axios
    .post<Ingredient>(baseUrl, object, getAuth())
    .then(response => response.data)
}

export default {
  getAll,
  addNew
}