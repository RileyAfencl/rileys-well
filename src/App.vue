<script setup lang="ts">
import AppSidebar from "./components/AppSidebar.vue"
import CatalogueView from "./views/CatalogueView.vue"
</script>

<template>
  <div class="app-shell">
    <AppSidebar />
    <div class="app-main">
      <header class="site-header">
        <h1 class="site-title">
          <span class="title-welcome">Welcome to</span>
          <span class="title-signature">
            <span>Riley's Well</span>
            <svg
              class="martini-icon"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                class="glass"
                d="M8 8h32L24 26 8 8z"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linejoin="round"
              />
              <path
                class="stem"
                d="M24 26v14"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              />
              <path
                class="base"
                d="M16 42h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              />
              <circle class="olive" cx="24" cy="16" r="2.4" fill="currentColor" />
              <path
                class="pick"
                d="M21 14.4 28.4 11"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h1>
      </header>

      <main class="catalogue" aria-label="Recipe catalogue">
        <CatalogueView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  min-width: 0;
}

.site-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.25rem;
}

.site-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 0;
  line-height: 1.1;
}

.title-welcome {
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: clamp(1.35rem, 4vw, 1.75rem);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.title-signature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  font-family: "Great Vibes", "Segoe Script", cursive;
  font-size: clamp(2.75rem, 9vw, 4.25rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.2;
  color: var(--color-silver);
}

.martini-icon {
  width: 0.7em;
  height: 0.7em;
  flex-shrink: 0;
  color: var(--color-gold);
}

.catalogue {
  min-height: 0;
}

@media (max-width: 768px) {
  .app-shell {
    flex-direction: column;
  }
}
</style>

<style>
:root {
  --color-ink: #2c1e14;
  --color-cream: #f4efe6;
  --color-gold: #c5a059;
  --color-silver: #c8c4bc;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  background: var(--color-ink);
  color: var(--color-gold);
  font-family: "Source Sans 3", "Segoe UI", sans-serif;
}

#app {
  min-height: 100vh;
}
</style>
