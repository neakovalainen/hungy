import axios from "axios"
import type { NewUser, UserAndToken } from "../types"
const baseUrl = 'api/login'

const login = async (loginInfo: UserAndToken) => {
  console.log('servicessa', loginInfo)
  return axios
    .post<NewUser>(baseUrl, loginInfo)
    .then(response => response.data)
}

export default {
  login
}