import axios from 'axios'
import type { Ingredient, NewIngredient } from '../types'

let token: string = ''
const baseUrl = '/api/ingredients'

const setToken = (createToken: string) => {
  token = `Bearer ${createToken}`
}

const getAll = () => {
  console.log('got to axios!!!')
  return axios
    .get<Ingredient[]>(baseUrl)
    .then(response => response.data)
}

const addNew = (object: NewIngredient) => {
  const config = {
    headers: { Authorization: token }
  }
  return axios
    .post<Ingredient>(baseUrl, object, config)
    .then(response => response.data)
}

export default {
  getAll,
  addNew,
  setToken
}