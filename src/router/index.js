import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CustomerView from '@/views/CustomerView.vue' // Ensure this import is correct

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView  // Use HomeView for the home route
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView  // Use AboutView for the about route
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView  // Use ContactView for the contact route
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView  // Use CustomerView for the customer route (fixed the comment)
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
