import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue')
  },
  {
    path: '/softskills',
    name: 'softskills',
    component: () => import('../views/SoftSkillsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/CaseStudy1',
    name: 'CaseStudy1',
    component: () => import('../views/CaseStudy1.vue')
  },
  {
    path: '/CaseStudy2',
    name: 'CaseStudy2',
    component: () => import('../views/CaseStudy2.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
