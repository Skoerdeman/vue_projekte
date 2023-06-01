import Categories from './components/Categories.vue'
import MainPage from './components/MainPage.vue'
import App from './App.vue'
import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: MainPage },
  {path: '/categories', component: Categories }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })


const app = createApp(App)
app.use(router)
app.mount('#app')

