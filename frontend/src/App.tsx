import { useEffect, useState } from 'react'
import type { Ingredient } from './types'
import ingredientService from './services/ingredientService'

const App = () => {
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    ingredientService.getAll().then(originalIngredients => {
      setIngredients(originalIngredients)
    })
  }, [])

  const addIngredient = (event: React.SyntheticEvent) => {
    event.preventDefault()

    ingredientService
      .add_new({ name: newIngredient })
      .then(returnedIngredient => {
        setIngredients(ingredients.concat(returnedIngredient))
      })
    setNewIngredient('')
  }

  return (
    <div>
      <form onSubmit={addIngredient}>
        <input
        value={newIngredient}
        onChange={(event) => setNewIngredient(event.target.value)} 
        />
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

export default App
