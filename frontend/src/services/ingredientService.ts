import axios from 'axios'
import type { Ingredient, NewIngredient } from '../types'

const baseUrl = '/api/ingredients'

const setToken = (createToken: string) => {
  window.localStorage.setItem(
    'bearerToken', `Bearer ${createToken}`
  )
}

const getAll = async () => {
  console.log('got to axios!!!')
  return await axios
    .get<Ingredient[]>(baseUrl)
    .then(response => response.data)
}

const addNew = async (object: NewIngredient) => {
  const token = window.localStorage.getItem('bearerToken')

  const config = {
    headers: { Authorization: token }
  }
  return await axios
    .post<Ingredient>(baseUrl, object, config)
    .then(response => response.data)
}

export default {
  getAll,
  addNew,
  setToken
}