import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Me from '../views/Me.vue'
import Tour from '../views/Tour.vue'
import Sto from '../views/Sto.vue'
// import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', component: Tour },
      { path: '/new', component: New },
      { path: '/me', component: Me }
    ]
  },
  {
    path: '/sto',
    name: 'Sto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
    component: Sto
  },
  {
    path: '/editBill',
    name: 'editBill',
    component: () => import(/* webpackChunkName: "editBill" */ '../views/EditBill.vue')
  },
  {
    path: '/editNote',
    name: 'editNote',
    component: () => import(/* webpackChunkName: "editNote" */ '../views/EditNote.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
