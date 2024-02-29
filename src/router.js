// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Define your routes here
  {
    path: '/',
    component: () => import('./views/BaseView.vue'), // Example: Lazy-loaded component
    name: 'home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
