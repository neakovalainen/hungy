import Link from "next/link"
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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes