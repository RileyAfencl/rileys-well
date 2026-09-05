<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import RecipeCard from "../components/RecipeCard.vue"
import RecipeModal from "../components/RecipeModal.vue"
import type { Recipe } from "../types/cocktail"

const recipeName = ref("")
const spirit = ref("")
const recipes = ref<Recipe[]>([])
const selectedRecipe = ref<Recipe | null>(null)

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/[-_\s]+/g, " ")
}

const filteredRecipes = computed(() => {
  const nameQuery = normalize(recipeName.value)
  const spiritQuery = normalize(spirit.value)

  return recipes.value.filter((recipe) => {
    const matchesName = !nameQuery || normalize(recipe.name).includes(nameQuery)
    const matchesSpirit = !spiritQuery || normalize(recipe.spirit).includes(spiritQuery)

    return matchesName && matchesSpirit
  })
})

onMounted(async () => {
  const response = await fetch("/recipes")
  recipes.value = (await response.json()) as Recipe[]
})
</script>

<template>
  <section class="catalogue-view" aria-label="Recipe catalogue">
    <h2 class="catalogue-title">The Catalogue</h2>
    <div class="catalogue-filters">
      <label class="field">
        <span class="field-label">Recipe Name</span>
        <input
          v-model="recipeName"
          class="field-input"
          type="search"
          name="recipe-name"
          autocomplete="off"
        />
      </label>
      <label class="field">
        <span class="field-label">Spirit</span>
        <input
          v-model="spirit"
          class="field-input"
          type="text"
          name="spirit"
          autocomplete="off"
        />
      </label>
      <p class="catalogue-helper">
        Filter The Catalogue by recipe name and/or type of spirit!
      </p>
    </div>
    <div v-if="filteredRecipes.length" class="catalogue-preview">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :recipe="recipe"
        @select="selectedRecipe = recipe"
      />
    </div>
    <p v-else class="catalogue-empty">No recipes match those filters.</p>
    <RecipeModal
      v-if="selectedRecipe"
      :recipe="selectedRecipe"
      @close="selectedRecipe = null"
    />
  </section>
</template>

<style scoped>
.catalogue-view {
  padding: 0.5rem 1.5rem 2rem;
}

.catalogue-title {
  margin: 0 0 1.75rem;
  font-family: "Great Vibes", "Segoe Script", cursive;
  font-size: clamp(2.5rem, 7vw, 3.75rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.2;
  text-align: center;
  color: var(--color-silver);
}

.catalogue-filters {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  width: min(18.5rem, 100%);
}

.field-label {
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-gold);
}

.field-input {
  width: 100%;
  padding: 0.95rem 1rem;
  color: var(--color-silver);
  background: #24180f;
  border: 1px solid rgba(197, 160, 89, 0.45);
  border-radius: 2px;
  font-family: "Source Sans 3", "Segoe UI", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  appearance: none;
}

.catalogue-helper {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
  height: calc(0.95rem + 0.95rem + 1.2rem * 1.3 + 2px);
  margin: 0;
  color: var(--color-silver);
  font-family: "Source Sans 3", "Segoe UI", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
}

.catalogue-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr));
  align-items: stretch;
  gap: 1rem;
  margin-top: 1.75rem;
}

.catalogue-empty {
  margin: 1.75rem 0 0;
  color: var(--color-silver);
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 1.2rem;
}

.field-input:hover {
  border-color: var(--color-gold);
}

.field-input:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
  border-color: var(--color-gold);
}

@media (max-width: 768px) {
  .catalogue-view {
    padding: 0.25rem 1.15rem 1.5rem;
  }

  .catalogue-filters {
    flex-direction: column;
    align-items: stretch;
  }

  .field {
    width: 100%;
  }

  .catalogue-helper {
    height: auto;
  }
}
</style>
