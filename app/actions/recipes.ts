"use server"
import { redirect } from "next/navigation"
import { addRecipe } from "../services/recipes"
import { revalidatePath } from "next/cache"

export const createRecipe = async (formData: FormData) => {
  const name = formData.get("name") as string
  const instructions = formData.get("instructions") as string

  addRecipe(name, instructions)
  revalidatePath("/recipes")
  redirect("/recipes")
}