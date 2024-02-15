<template>
  <div>
    <h1>Identifie-toi stp Stan</h1>
    <form @submit.prevent="submitForm">
      <label for="id">Identifiant:</label>
      <input type="text" id="id" v-model="id" placeholder="Ton identifiant" required>
      <p v-if="idError" class="error">{{ idError }}</p>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Ton email" required>
      <p v-if="emailError" class="error">{{ emailError }}</p>

      <label for="password">Mot de passe:</label>
      <input type="password" id="password" v-model="password" placeholder="Mot de passe" required>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>

      <label for="confirmPassword">Confirmer le mot de passe:</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirmer le mot de passe" required>
      <p v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</p>

      <button type="submit" :disabled="!isFormValid">Valider</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const id = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const idError = computed(() => id.value.includes(' ') ? 'L\'identifiant ne doit pas contenir d\'espaces.' : '');
const emailError = computed(() => !emailRegex.test(email.value) ? 'Adresse email invalide.' : '');
const passwordError = computed(() => password.value !== confirmPassword.value ? 'Les mots de passe ne correspondent pas.' : '');
const confirmPasswordError = computed(() => !passwordRegex.test(password.value) ? 'Le mot de passe doit contenir au moins 8 caractères, inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.' : '');

const isFormValid = computed(() => id.value !== '' && emailRegex.test(email.value) && password.value !== '' && confirmPassword.value !== '' && password.value === confirmPassword.value && passwordRegex.test(password.value));

const submitForm = () => {
  console.log(email.value);
  console.log(password.value);
};
</script>

<style scoped>
/* Styles spécifiques à formulaire.vue */
form {
  display: flex;
  flex-direction: column;
  align-items: start;
}
input, button {
  margin: 0.5rem 0;
}
.error {
  color: red;
  font-size: 0.8rem;
}
</style>
