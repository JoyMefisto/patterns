import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/patterns',
  //   name: 'Patterns',
  //   component: () => import('../views/patterns'),
  //   children: [
  //     {
  //       path: 'creational',
  //       name: 'PatternsCreational',
  //       component: () => import('../views/patterns/creational.vue')
  //     },
  //     {
  //       path: 'structural',
  //       name: 'PatternsStructural',
  //       component: () => import('../views/patterns/structural.vue')
  //     },
  //     {
  //       path: 'behavioral',
  //       name: 'PatternsBehavioral',
  //       component: () => import('../views/patterns/behavioral.vue')
  //     }
  //   ]
  // }
  {
    path: '/patterns',
    name: 'Patterns',
    component: () => import('../views/patterns')
  },
  {
    path: '/patterns/creational',
    name: 'PatternsCreational',
    component: () => import('../views/patterns/creational/index.vue'),
    children: [
      {
        path: 'singleton',
        name: 'PatternsCreationalSingleton',
        component: () => import('../views/patterns/creational/singleton.vue')
      },
      {
        path: 'factoryMethod',
        name: 'PatternsCreationalFactoryMethod',
        component: () =>
          import('../views/patterns/creational/factoryMethod.vue')
      }
    ]
  },
  {
    path: '/patterns/structural',
    name: 'PatternsStructural',
    component: () => import('../views/patterns/structural.vue')
  },
  {
    path: '/patterns/behavioral',
    name: 'PatternsBehavioral',
    component: () => import('../views/patterns/behavioral.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
