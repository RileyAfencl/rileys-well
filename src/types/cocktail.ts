export type GlassType = "collins" | "martini" | "rocks" | "coupe"

export interface Ingredient {
  id: string
  name: string
  amount: number
  unit: string
}

export interface Recipe {
  id: string
  name: string
  spirit: string
  tags: string[]
  glass: GlassType
  garnish: string[]
  ingredients: Ingredient[]
  instructions: string[]
}
