import { useEffect, useState } from "react"
import ingredientService from "../services/ingredientService"
import recipeService from "../services/recipeService"
import { type NewIngredient, type NewRecipe, type NewRecipeIngredientRelation } from "../types"

const RecipePage = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeIngredients, setRecipeIngredients] = useState<NewIngredient[]>([])
  const [currentIngredient, setCurrentIngredient] = useState('')
  const [recipeInstructions, setRecipeInstructions] = useState('')
  const [addedIngredients, setAddedIngredients] = useState(false)
  const [nameState, setNameState] = useState(false)

  useEffect(() => {})

  const handleIngredientAddition = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setRecipeIngredients(recipeIngredients.concat({name: currentIngredient}))
  }

  const saveRecipe = async () => {
    let alreadyExists: boolean = false
    let worked = true
    const recipe: NewRecipe = {
      name: recipeName,
      instructions: recipeInstructions
    }
    const added_ingredient_ids: number[] = []
    const already_added = await ingredientService.getAll() // should this be in a try.....

    if (already_added.length === 0) {
      for (let i = 0; i <= recipeIngredients.length; i++) {
        try {
          const added = await ingredientService.addNew(recipeIngredients[i])
          added_ingredient_ids.concat(added.id)
        } catch (error) {
          worked = false
          console.error('error adding ingredient', error)
        }
      }
    } else {
      for (let i = 0; i <= recipeIngredients.length; i++) {
        for (let j = 0; j <= already_added.length; j++) {
          if (already_added[j].name === recipeIngredients[i].name) {
            alreadyExists = true
            added_ingredient_ids.concat(already_added[j].id)
            break
          }
        }
        if (!alreadyExists) {
          try {
            const added = await ingredientService.addNew(recipeIngredients[i])
            added_ingredient_ids.concat(added.id)
          } catch (error) {
            worked = false
            console.error('error adding ingredient', error)
          }
        }
      }
    }
    try {
      const recipe_to_add = await recipeService.addNew(recipe)
      if (worked) {
        for (let i = 0; i <= added_ingredient_ids.length; i++) {
          const relation: NewRecipeIngredientRelation = {
            recipe_id: recipe_to_add.id,
            ingredient_id: added_ingredient_ids[i],
          }
          recipeService.addRecipeIngredientRelation(relation)
        }
      }
    } catch (error) {
        console.error('error adding recipe', error)
    }

  }


  if (!nameState) {
    return (
    <div className="ingredientdiv">
      <h1>Save a new recipe~~</h1>
      <p>What is the name of the recipe? (˶ᵔ ᵕ ᵔ˶)</p>
        <form>
          <label>
            <input
              type='text'
              placeholder="carrot cake"
              value={recipeName}
              onChange={(event) => setRecipeName(event.target.value)} 
            />
          </label>
        </form>
        <button type="button" onClick={() => setNameState(true)}>edit ingredients</button>
      <img className="book" src="../designs/bookopen.png"></img>
    </div>
  )}
  if (!addedIngredients && nameState) {
    return (
    <div className="ingredientdiv">
      <h1>Save a new recipe~~</h1>
      <p>Add ingredients one by one:</p>
        <form onSubmit={handleIngredientAddition}>
          <label>
            <input
              type='text'
              placeholder="parsley"
              value={currentIngredient}
              onChange={(event) => setCurrentIngredient(event.target.value)} 
            />
          </label>
          <button type='submit'>add</button>
        </form>
        <button type="button" onClick={() => setNameState(false)}>edit name</button>
        <button type="button" onClick={() => setAddedIngredients(true)}>edit instructions</button>
      <img className="book" src="../designs/bookopen.png"></img>
    </div>
    )}
  if (addedIngredients && nameState) {
    return (
    <div className="ingredientdiv">
      <h1>Save a new recipe~~</h1>
      <p>Please write clear instructions for your recipe!</p>
      <form onSubmit={saveRecipe}>
        <label>
          <input
            type='text'
            placeholder="First you need to boil water"
            value={recipeInstructions}
            onChange={(event) => setRecipeInstructions(event.target.value)} 
          />
        </label>
        <button type='submit'>add</button>
      </form>
      <button type="button" onClick={() => setAddedIngredients(false)}>edit ingredients</button>
      <img className="book" src="../designs/bookopen.png"></img>
    </div>
  )}
}
export default RecipePage
