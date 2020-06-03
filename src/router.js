import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cakes',
      name: 'cakes',
      component: () => import(/* webpackChunkName: "cakes" */ './views/Cakes.vue')
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: () => import(/* webpackChunkName: "pedido" */ './views/pedido.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpacChunkName: "contacto" */ './views/Contacto.vue')
    }
  ]
})
