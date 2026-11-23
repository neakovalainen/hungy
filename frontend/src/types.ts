
export interface Ingredient {
  id: number,
  name: string
}

export interface User {
  id: number,
  username: string,
  password: string
}

export type NewIngredient = Omit<Ingredient, 'id'>



export type NewUser = Omit<User, 'id'>

export interface UserAndToken extends NewUser {
  token: string
}