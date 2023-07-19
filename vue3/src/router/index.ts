import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import Page3View from '../views/Page3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: Page1View
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2View
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3View
    },
    {
      path: '/',
      name: 'index',
      redirect: '/page1'
    }
  ]
})

export default router
