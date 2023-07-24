import {createRouter, createWebHistory} from 'vue-router'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import Page3View from '../views/Page3View.vue'


interface IPage {
  path: string;
  name: string;
  component?: InstanceType<typeof Page1View>
  redirect?: string
}
const routes: IPage[] = [
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
