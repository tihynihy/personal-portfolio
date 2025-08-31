import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TechView from './views/TechView.vue'
import RoadmapView from './views/RoadmapView.vue'
import ContactView from './views/ContactView.vue'
import AchievementsView from './views/AchievementsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tech',
    name: 'tech',
    component: TechView
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: RoadmapView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: AchievementsView
  }
]

const router = createRouter({
  history: createWebHistory('/personal-portfolio/'),
  routes
})

export default router
