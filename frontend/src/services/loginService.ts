import axios from "axios"
import type { NewUser, UserAndToken } from "../types"
const baseUrl = 'api/login'

export const setToken = (createToken: string) => {
  window.localStorage.setItem(
    'bearerToken', `Bearer ${createToken}`
  )
}

export const getAuth = () => {
  const token = window.localStorage.getItem('bearerToken')

  const config = {
    headers: { Authorization: token}
  }
  return config
}

const login = async (loginInfo: NewUser) => {
  console.log('servicessa', loginInfo)
  //console.log('token', token)
  return axios
    .post<UserAndToken>(baseUrl, loginInfo)
    .then(response => response.data)
}

export default {
  login,
  setToken
}