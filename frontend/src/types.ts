
export interface Ingredient {
  id: string,
  name: string
}

export type NewIngredient = Omit<Ingredient, 'id'>