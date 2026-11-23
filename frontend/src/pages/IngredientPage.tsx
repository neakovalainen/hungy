import { useEffect, useState } from 'react'
import type { Ingredient } from '../types'
import ingredientService from '../services/ingredientService'

const IngredientPage = () => {
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    ingredientService.getAll().then(originalIngredients => {
      setIngredients(originalIngredients)
    })
  }, [])

  const addIngredient = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    ingredientService
      .addNew({ name: newIngredient })
      .then(returnedIngredient => {
        setIngredients(ingredients.concat(returnedIngredient))
      })
    setNewIngredient('')
  }
  return (
    <div>
      <p> but does it work actually?</p>
      <form onSubmit={addIngredient}>
        <label>
          <input
            type='text'
            value={newIngredient}
            onChange={(event) => setNewIngredient(event.target.value)} 
          />
        </label>
        <button type='submit'>add</button>
      </form>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient.id}>{ingredient.name}</li>
        )}
      </ul>
    </div>
  )
}

export default IngredientPage