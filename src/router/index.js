import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Card from '../views/Card.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card/:id',
    name: 'Card',
    component: Card,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
