import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

const asyncRoutes = [
  {
    path: '/icon',
    component: () => import('@/views/icon/index'),
    meta: { title: 'Icon', icon: 'icon' }
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1',
    meta: { title: 'Menu', icon: 'menu' },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1/index'),
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menu/menu1/menu1-1/index'),
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menu/menu1/menu1-2/index'),
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index'),
                meta: { title: 'Menu1-2-1' }
              }
            ]
          },
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index'),
        meta: { title: 'Menu2' },
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
