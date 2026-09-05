<script setup lang="ts">
import AppButton from "./AppButton.vue"
</script>

<template>
  <aside class="app-sidebar" aria-label="Main navigation">
    <p class="sidebar-kicker">Navigation</p>
    <nav class="sidebar-nav">
      <AppButton active aria-current="page">Recipe Catalogue</AppButton>
    </nav>
  </aside>
</template>

<style scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 16.5rem;
  min-height: 100vh;
  padding: 1.75rem 1.15rem;
  background: #24180f;
  border-right: 1px solid rgba(197, 160, 89, 0.35);
}

.sidebar-kicker {
  margin: 0;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-gold);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

@media (max-width: 768px) {
  .app-sidebar {
    width: 100%;
    min-height: 0;
    border-right: none;
    border-bottom: 1px solid rgba(197, 160, 89, 0.35);
    padding: 1.15rem 1.15rem 1.35rem;
  }
}
</style>
