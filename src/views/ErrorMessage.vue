<template>
    <p v-if="message" class="error">{{ message }}</p>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    message: String
  });
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 0.8rem;
  }
  </style>
  