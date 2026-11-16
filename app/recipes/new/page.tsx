import { createRecipe } from "@/app/actions/recipes"

const NewRecipe = () => {
  return (
    <div>
      <h2>Add new recipe</h2>
      <form action={createRecipe}>
        <div>
          <label>
            name
            <input type="text" name="name" required/>
          </label>
        </div>
        <div>
          <label>
          instructions
          <input type="text" name="instructions"/>
          </label>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default NewRecipe