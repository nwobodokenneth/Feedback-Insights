import { createRouter, createWebHashHistory } from 'vue-router'
import FeedbackDashboardView from "@/views/FeedbackDashboardView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: FeedbackDashboardView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
