"use server"
import { redirect } from "next/navigation"
import { addRecipe, changeRecipe } from "../services/recipes"
import { revalidatePath } from "next/cache"

export const createRecipe = async (formData: FormData) => {
  const name = formData.get("name") as string
  const instructions = formData.get("instructions") as string

  addRecipe(name, instructions)
  revalidatePath("/recipes")
  redirect("/recipes")
}

export const changeRecipeInstructions = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  changeRecipe(id)
  revalidatePath(`/recipes/${id}`)
  revalidatePath("/recipes")
}