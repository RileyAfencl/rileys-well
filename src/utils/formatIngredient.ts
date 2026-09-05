import type { Ingredient } from "../types/cocktail"

function formatQuantity(amount: number): string {
  return String(amount)
}

function isSingular(amount: number): boolean {
  return amount === 1
}

function pluralizeWord(word: string): string {
  if (/[^aeiou]y$/i.test(word)) {
    return `${word.slice(0, -1)}ies`
  }

  if (/(?:s|x|z|ch|sh)$/i.test(word)) {
    return `${word}es`
  }

  return `${word}s`
}

function pluralizeUnit(unit: string, amount: number): string {
  if (unit === "oz" || isSingular(amount)) {
    return unit
  }

  if (unit === "dash") {
    return "dashes"
  }

  return pluralizeWord(unit)
}

function pluralizeIngredientName(name: string): string {
  const parts = name.split(" ")
  const lastWord = parts.at(-1)

  if (!lastWord) {
    return name
  }

  parts[parts.length - 1] = pluralizeWord(lastWord)
  return parts.join(" ")
}

export function formatMeasurement(ingredient: Ingredient): string {
  const quantity = formatQuantity(ingredient.amount)

  if (ingredient.unit === "piece") {
    return quantity
  }

  return `${quantity} ${pluralizeUnit(ingredient.unit, ingredient.amount)}`
}

export function formatIngredientName(ingredient: Ingredient): string {
  if (ingredient.unit === "piece" && !isSingular(ingredient.amount)) {
    return pluralizeIngredientName(ingredient.name)
  }

  return ingredient.name
}
