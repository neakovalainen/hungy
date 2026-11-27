
export interface Ingredient {
  id: number,
  name: string
}

export interface User {
  id: number,
  username: string,
  password: string
}

export interface Recipe {
  id: number,
  name: string,
  instructions: string,
  user_id: number,
}

export interface RecipeIngredients {
  id: number,
  recipe_id: number,
  ingredient_id: number
}

export interface UserAndToken extends NewUser {
  token: string
}

export interface RecipeIngredientRelation {
  id: number,
  recipe_id: number,
  ingredient_id: number
}

export type NewRecipe = Omit<Recipe, 'id' | 'user_id'>

export type NewIngredient = Omit<Ingredient, 'id'>

export type NewUser = Omit<User, 'id'>

export type NewRecipeIngredientRelation = Omit<RecipeIngredientRelation, 'id'>