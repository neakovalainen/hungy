import { notFound } from "next/navigation"
import { getSpecificRecipe } from "@/app/services/recipes"

const RecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const recipe = getSpecificRecipe(Number(id))

  if (!recipe) {
    notFound()
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>instructions: {recipe.instructions}</p>
    </div>
  )
}

export default RecipePage