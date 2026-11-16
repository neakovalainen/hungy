const recipes = [
  {
    id: 1, name: "best pasta", instructions: "boil water, add pasta, wait"
  },
  {
    id: 2, name: "not the best pasta", instructions: "eat it raw..."
  }
]

let nextId = 3

export const getRecipes = () => {
  return recipes
}

export const addRecipe = (name: string, instructions: string) => {
  recipes.push({ id: nextId++, name, instructions })
}

export const getSpecificRecipe = (id: number) => {
  return recipes.find((recipe) => recipe.id === id)
}