<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import GlassIcon from "./GlassIcon.vue"
import type { Recipe } from "../types/cocktail"
import { formatIngredientName, formatMeasurement } from "../utils/formatIngredient"

const props = defineProps<{
  recipe: Recipe
}>()

const emit = defineEmits<{
  close: []
}>()

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    emit("close")
  }
}

onMounted(() => {
  document.body.style.overflow = "hidden"
  window.addEventListener("keydown", onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ""
  window.removeEventListener("keydown", onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div class="modal-backdrop" @click.self="emit('close')">
      <div
        class="recipe-modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`recipe-modal-title-${props.recipe.id}`"
      >
        <button
          class="modal-close"
          type="button"
          aria-label="Close recipe"
          @click="emit('close')"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M6 6l12 12M18 6 6 18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <header class="recipe-modal-header">
          <div class="glass-meta">
            <GlassIcon :glass="recipe.glass" />
            <span class="glass-name">{{ recipe.glass }}</span>
          </div>
          <h2 :id="`recipe-modal-title-${recipe.id}`" class="recipe-modal-title">
            {{ recipe.name }}
          </h2>
        </header>

        <ul v-if="recipe.tags.length" class="tag-list">
          <li v-for="tag in recipe.tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>

        <section class="modal-section">
          <h3 class="section-label">Ingredients</h3>
          <ul class="ingredient-list">
            <li
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.id"
              class="ingredient-row"
            >
              <span class="ingredient-measure">{{ formatMeasurement(ingredient) }}</span>
              <span class="ingredient-name">{{ formatIngredientName(ingredient) }}</span>
            </li>
          </ul>
        </section>

        <section class="modal-section">
          <h3 class="section-label">Instructions</h3>
          <ol class="step-list">
            <li v-for="(step, index) in recipe.instructions" :key="index" class="step">
              {{ step }}
            </li>
          </ol>
        </section>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(20, 12, 8, 0.72);
}

.recipe-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  width: min(36rem, 100%);
  max-height: min(42rem, calc(100vh - 2.5rem));
  overflow: auto;
  padding: 1.35rem 1.35rem 1.5rem;
  background: #24180f;
  border: 1px solid rgba(197, 160, 89, 0.45);
  border-radius: 2px;
}

.modal-close {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  color: var(--color-gold);
  background: transparent;
  border: 1px solid var(--color-gold);
  border-radius: 2px;
  cursor: pointer;
}

.modal-close:hover {
  background: rgba(197, 160, 89, 0.12);
}

.modal-close:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.modal-close svg {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

.recipe-modal-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding-right: 3rem;
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

.recipe-modal-title {
  margin: 0;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.15;
  color: var(--color-silver);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  padding: 0.2rem 0.55rem;
  border: 1px solid rgba(197, 160, 89, 0.45);
  border-radius: 2px;
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: lowercase;
}

.modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.section-label {
  margin: 0;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
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

.ingredient-name,
.step {
  color: var(--color-silver);
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 0;
  padding: 0 0 0 1.2rem;
}

.step {
  padding-left: 0.35rem;
  line-height: 1.45;
}

.step::marker {
  color: var(--color-gold);
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-weight: 700;
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 0.75rem;
    align-items: flex-end;
  }

  .recipe-modal {
    width: 100%;
    max-height: calc(100vh - 1.5rem);
  }
}
</style>
