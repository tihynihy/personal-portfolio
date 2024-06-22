import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./views/BaseView.vue'), 
    name: 'home',
  },
  {
    path: '/roadmap',
    component: () => import('./views/RoadmapView.vue'), 
    name: 'roadmap',
  },
  {
    path: '/about',
    component: () => import('./views/AboutView.vue'), 
    name: 'about',
  },
];

const router = createRouter({
  history: createWebHistory('/personal-portfolio/'), 
  routes,
});

export default router;
