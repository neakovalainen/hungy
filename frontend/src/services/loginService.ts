import axios from "axios"
import type { NewUser, UserAndToken } from "../types"
const baseUrl = 'api/login'

const login = async (loginInfo: NewUser) => {
  console.log('servicessa', loginInfo)
  return axios
    .post<UserAndToken>(baseUrl, loginInfo)
    .then(response => response.data)
}

export default {
  login
}