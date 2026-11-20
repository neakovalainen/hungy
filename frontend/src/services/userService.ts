import axios from "axios"
import type { User, NewUser } from "../types"

const baseUrl = '/api/users'

const getAll = async () => {
  return axios
    .get<User[]>(baseUrl)
    .then(response => response.data)
}

const addNew = async (object: NewUser) => {
  return axios
    .post<User>(baseUrl, object)
    .then(response => response.data)
}

export default {
  getAll,
  addNew
}