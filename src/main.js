import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Transactions from './components/Transactions.vue'
import Products from './components/Products.vue'
import PayablesReceivables from './components/PayablesReceivables.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/transactions', component: Transactions },
  { path: '/products', component: Products },
  { path: '/payables-receivables', component: PayablesReceivables }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
