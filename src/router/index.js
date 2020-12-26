import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('../views/Home');
const About = () => import('../views/About')
const ShopCar = () => import('../views/ShopCar')
const Person = () => import('../views/Person')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: ShopCar
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
