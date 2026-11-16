"use server"
import { redirect } from "next/navigation"
import { addRecipe } from "../services/recipes"

export const createRecipe = async (formData: FormData) => {
  const name = formData.get("name") as string
  const instructions = formData.get("instructions") as string

  addRecipe(name, instructions)
  redirect("/recipes")
}