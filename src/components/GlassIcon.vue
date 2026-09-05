<script setup lang="ts">
import type { GlassType } from "../types/cocktail"

defineProps<{
  glass: GlassType
}>()
</script>

<template>
  <svg
    class="glass-icon"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g v-if="glass === 'martini'">
      <path
        d="M8 8h32L24 26 8 8z"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linejoin="round"
      />
      <path
        d="M24 26v14"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <path
        d="M16 42h16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </g>
    <g v-else-if="glass === 'coupe'">
      <path
        d="M10 12c0 8 6.3 14 14 14s14-6 14-14"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <path
        d="M10 12h28"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <path
        d="M24 26v14"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <path
        d="M16 42h16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </g>
    <g v-else-if="glass === 'collins'">
      <path
        d="M16 7h16l-2.2 33H18.2L16 7z"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linejoin="round"
      />
      <path
        d="M18 42h12"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </g>
    <g v-else>
      <path
        d="M12 14h24l-2.4 24H14.4L12 14z"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linejoin="round"
      />
      <path
        d="M14 40h20"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<style scoped>
.glass-icon {
  display: block;
  width: 2.1rem;
  height: 2.1rem;
}
</style>
