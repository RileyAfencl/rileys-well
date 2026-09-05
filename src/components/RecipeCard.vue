<script setup lang="ts">
import GlassIcon from "./GlassIcon.vue"
import type { Recipe } from "../types/cocktail"
import { formatIngredientName, formatMeasurement } from "../utils/formatIngredient"

defineProps<{
  recipe: Recipe
}>()

const emit = defineEmits<{
  select: []
}>()
</script>

<template>
  <article
    class="recipe-card"
    role="button"
    tabindex="0"
    @click="emit('select')"
    @keydown.enter="emit('select')"
    @keydown.space.prevent="emit('select')"
  >
    <header class="recipe-card-header">
      <div class="glass-meta">
        <GlassIcon :glass="recipe.glass" />
        <span class="glass-name">{{ recipe.glass }}</span>
      </div>
      <h3 class="recipe-card-title">{{ recipe.name }}</h3>
    </header>
    <ul class="ingredient-list">
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.id" class="ingredient-row">
        <span class="ingredient-measure">{{ formatMeasurement(ingredient) }}</span>
        <span class="ingredient-name">{{ formatIngredientName(ingredient) }}</span>
      </li>
      <li v-if="recipe.garnish.length" class="ingredient-row">
        <span class="ingredient-measure">Garnish</span>
        <span class="ingredient-name">{{ recipe.garnish.join(", ") }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1.15rem 1.2rem 1.25rem;
  background: #24180f;
  border: 1px solid rgba(197, 160, 89, 0.45);
  border-radius: 2px;
  cursor: pointer;
}

.recipe-card:hover,
.recipe-card:focus-visible {
  border-color: var(--color-gold);
}

.recipe-card:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.recipe-card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.glass-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 0.2rem;
  color: var(--color-gold);
}

.glass-name {
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: lowercase;
}

.recipe-card-title {
  margin: 0;
  min-height: 2.3em;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: clamp(1.35rem, 3vw, 1.7rem);
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.15;
  color: var(--color-silver);
}

.ingredient-list {
  display: grid;
  grid-template-columns: 6.75rem 1fr;
  column-gap: 0.85rem;
  row-gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ingredient-row {
  display: contents;
}

.ingredient-measure {
  font-variant-numeric: tabular-nums;
  color: var(--color-gold);
}

.ingredient-name {
  color: var(--color-silver);
}
</style>
