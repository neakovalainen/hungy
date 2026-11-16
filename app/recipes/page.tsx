import { getRecipes } from "../services/recipes"

const Recipes = () => {
  const recipes = getRecipes()
  return (
    <div>
      <h2>
        recipes
      </h2>
      <p>
        all recipes the user has added should be shown here!
        but no database yet, so no recipes.... sad
      </p>
    </div>
  )
}

export default Recipes