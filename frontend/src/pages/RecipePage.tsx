import { useEffect, useState } from "react"

const RecipePage = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeIngredient, setRecipeIngredients] = useState([])
  const [recipeInstructions, setRecipeInstructions] = useState('')
  const [addedIngredients, setAddedIngredients] = useState(false)
  const [nameState, setNameState] = useState(false)

  useEffect(() => {})

  const handleIngredientAddition = (event: React.SyntheticEvent) => {
    event.preventDefault()
    // do usestate change for setrecipeingredients
  }

  const addIngredient = () => {
    // jokutoiminnallisuus yksittäisen ainesosan tallentamiseen
  }
  
  const addInstructions = () => {
    // toiminnallisuus reseptin ohjeiden lisäämiseen
  }
  const saveRecipe = () => {

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
        <form onSubmit={addIngredient}>
          <label>
            <input
              type='text'
              placeholder="parsley"
              value={recipeIngredient}
              onChange={(event) => handleIngredientAddition(event)} 
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
            value={recipeIngredient}
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
