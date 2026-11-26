import { useEffect, useState } from "react"

const RecipePage = () => {
  const [recipeName, setRecipeName] = useState('')
  const [recipeIngredient, setRecipeIngredients] = useState([])
  const [recipeInstructions, setRecipeInstructions] = useState('')
  const addedIngredients: boolean = true


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

  if (!addedIngredients) {
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
      <img className="book" src="../designs/bookopen.png"></img>
    </div>
  }

  return (
    <div className="ingredientdiv">
      <h1>Save a new recipe~~</h1>
      <p>Please write clear instructions for your recipe!</p>
        <form onSubmit={addIngredient}>
          <label>
            <input
              type='text'
              placeholder="First you need to boil water"
              value={recipeIngredient}
              onChange={(event) => handleIngredientAddition(event)} 
            />
          </label>
          <button type='submit'>add</button>
        </form>
      <img className="book" src="../designs/bookopen.png"></img>
    </div>
  )
}

export default RecipePage
