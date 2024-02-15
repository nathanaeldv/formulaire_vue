<template>
  <div>
    <nav>
      <RouterLink to="/">Formulaire</RouterLink> |
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
nav a {
  padding: 0.5rem;
}
</style>
