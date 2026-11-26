import { useEffect, useState } from 'react'
import type { Ingredient } from '../types'
import ingredientService from '../services/ingredientService'

const IngredientPage = ({ loggedIn }: {loggedIn: boolean}) => {
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    console.log('useeffect was called!!')
    console.log('logged in?', loggedIn)
    ingredientService.getAll().then(originalIngredients => {
      setIngredients(originalIngredients)
    })
  }, [loggedIn])

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
    <div className='ingredientdiv'>
      {/* <div className='ingredientdiv'> */}
        <p id='newingredientparagraph'>Add new ingredient:</p>
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
            <li className="ingredient" key={ingredient.id}>{ingredient.name}</li>
          )}
        </ul>
      {/* </div> */}
      <div>
        <img className="fridge" src="../designs/closedfridge.png"></img>
      </div>
    </div>
  )
}

export default IngredientPage