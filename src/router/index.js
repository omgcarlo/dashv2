// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Transactions from '../components/Transactions.vue'
import Products from '../components/Products.vue'
import PayablesReceivables from '../components/PayablesReceivables.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/finances',
    name: 'PayablesReceivables',
    component: PayablesReceivables
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
