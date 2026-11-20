
export interface Ingredient {
  id: string,
  name: string
}

export interface User {
  id: string,
  username: string,
  password: string
}

export type NewIngredient = Omit<Ingredient, 'id'>

export type NewUser = Omit<User, 'id'>