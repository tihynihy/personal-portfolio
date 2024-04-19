
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

//check vs

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
