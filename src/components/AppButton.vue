<script setup lang="ts">
withDefaults(
  defineProps<{
    active?: boolean
    type?: "button" | "submit"
  }>(),
  {
    active: false,
    type: "button",
  },
)
</script>

<template>
  <button :type="type" class="app-button" :class="{ 'is-active': active }">
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  width: 100%;
  padding: 0.85rem 1rem;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--color-gold);
  background: transparent;
  border: 1px solid var(--color-gold);
  border-radius: 2px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.app-button:hover {
  background: rgba(197, 160, 89, 0.12);
}

.app-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.app-button.is-active {
  background: var(--color-gold);
  color: var(--color-ink);
}
</style>
