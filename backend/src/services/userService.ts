import { type Request } from 'express'
import { User } from '../models/userModel.ts'
import { type UserType } from '../types.ts'

const getUser = async (id: number | undefined) => {
  const user = await User.findByPk(id)
  return user
}

const getUsers = async () => {
  const users = await User.findAll()
  return users
}

const getUserByUsername = async (body: Request["body"]) => {
  const user = await User.findOne({
    where: {
      username: body.username
    }
  })
  return user
}

const addUser = async (user: UserType) => {
  const response = await User.create(user)
  console.log('came to backservices')
  return response
}

export default {
  getUser,
  getUsers,
  getUserByUsername,
  addUser
}