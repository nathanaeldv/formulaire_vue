import { createRouter, createWebHistory } from 'vue-router';
import Formulaire from '../views/formulaire.vue';

const routes = [
  {
    path: '/',
    name: 'Formulaire',
    component: Formulaire,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

